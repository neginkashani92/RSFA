import axios from "axios";
import { getCookie, setCookie, eraseCookie } from "@/lib/utils";

// Create an instance of axios with default configuration
// This allows us to have a central place for API settings like baseURL
const axiosClient = axios.create({
    baseURL: "https://dummyjson.com", // The base URL for your API
    headers: {
        "Content-Type": "application/json", // Default content type for requests
    },
});

// Request Interceptor: Runs before every request is sent
axiosClient.interceptors.request.use(
    (config) => {
        // Retrieve the Access Token from Local Storage
        const token = localStorage.getItem("accessToken");

        // If the token exists, add it to the Authorization header
        // The format is usually "Bearer " followed by the token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Return the modified config to proceed with the request
        return config;
    },
    (error) => {
        // If there's an error setting up the request, reject the promise
        return Promise.reject(error);
    }
);

// Response Interceptor: Runs after every response is received
axiosClient.interceptors.response.use(
    (response) => {
        // If the response is successful (status 2xx), just return it
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Check if the error is 401 (Unauthorized) and if we haven't retried yet
        // The _retry flag prevents infinite loops if refresh fails
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Get the Refresh Token from the Cookie (as requested)
                const refreshToken = getCookie("refreshToken");

                // If no refresh token is found, we cannot refresh, so we logout
                if (!refreshToken) {
                    throw new Error("No refresh token available");
                }

                // Call the refresh endpoint to get a new Access Token
                // IMPORTANT: Verify the correct endpoint path ('/refresh') and payload structure with your backend team
                const response = await axios.post("https://dummyjson.com/auth/refresh", {
                    refreshToken: refreshToken, // Adjust the key if your backend expects 'token' or something else
                });

                // If refresh is successful
                if (response.status === 200) {
                    // Extract the new tokens from the response
                    // IMPORTANT: Check your API response structure (e.g., response.data.accessToken)
                    const newAccessToken = response.data.accessToken;
                    const newRefreshToken = response.data.refreshToken; // If backend rotates refresh tokens

                    // Store the new Access Token in Local Storage
                    localStorage.setItem("accessToken", newAccessToken);

                    // If a new Refresh Token is returned, update the Cookie
                    if (newRefreshToken) {
                        setCookie("refreshToken", newRefreshToken, 7); // Stores for 7 days
                    }

                    // Update the Authorization header of the original request with the new token
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    // Retry the original request with the new token
                    return axiosClient(originalRequest);
                }
            } catch (refreshError) {
                // If the refresh fails (e.g., refresh token expired) or any other error occurs
                console.error("Session expired or refresh failed", refreshError);

                // Clear all local data
                localStorage.removeItem("accessToken");
                eraseCookie("refreshToken");

                // Redirect the user to the login page
                // You generally shouldn't use window.location in React, but it works for a hard redirect on auth failure
                window.location.href = "/login";
            }
        }

        // If the error was not 401 or retry failed, reject the promise
        return Promise.reject(error);
    }
);

export default axiosClient;
