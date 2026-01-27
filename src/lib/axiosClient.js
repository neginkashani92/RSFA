import axios from "axios";
import { getCookie, setCookie, eraseCookie } from "@/lib/utils";

let currentAccessToken = null;

export const setAccessToken = (token) => {
    currentAccessToken = token;
};

// Create an instance of axios
const axiosClient = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor
axiosClient.interceptors.request.use(
    (config) => {
        if (currentAccessToken) {
            config.headers.Authorization = `Bearer ${currentAccessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = getCookie("refreshToken");

                if (!refreshToken) {
                    throw new Error("No refresh token available");
                }

                const response = await axios.post("https://dummyjson.com/auth/refresh", {
                    refreshToken: refreshToken,
                    expiresInMins: 30, // Optional: extending session matches dummyjson API
                });

                if (response.status === 200) {
                    const { accessToken, refreshToken: newRefreshToken } = response.data;

                    // Update memory token
                    setAccessToken(accessToken);

                    // Update refresh token cookie if a new one is returned
                    if (newRefreshToken) {
                        setCookie("refreshToken", newRefreshToken, 7);
                    }

                    // Retry original request
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosClient(originalRequest);
                }
            } catch (refreshError) {
                console.error("Session expired or refresh failed", refreshError);

                // Clear everything
                setAccessToken(null);
                eraseCookie("refreshToken");

                // Redirect to login using window.location as last resort since we are outside React context
                if (window.location.pathname !== "/login") {
                    window.location.href = "/login";
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
