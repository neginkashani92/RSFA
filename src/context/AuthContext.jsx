import { createContext, useContext, useEffect, useState } from "react";
import axiosClient, { setAccessToken } from "@/lib/axiosClient";
import { getCookie, eraseCookie, setCookie } from "@/lib/utils";
import axios from "axios"; // We might need raw axios for initial refresh if axiosClient has circular dependency issues, but direct import is usually fine.

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }) => {
  // Lazy load user from localStorage
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      return null;
    }
  });

  // Optimistic UI: If we already have a user, do NOT show loading.
  // We only show loading if we have NO user and are waiting to see if we can restore session.
  const [loading, setLoading] = useState(!user);

  // Initialize auth state on mount
  useEffect(() => {
    const initAuth = async () => {
      const refreshToken = getCookie("refreshToken");

      if (!refreshToken) {
        // No token implies logged out.
        // If we have a user (from LS) but no token, we might be in a weird state.
        // But for now, just stop loading.
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post("https://dummyjson.com/auth/refresh", {
          refreshToken: refreshToken,
          expiresInMins: 30, // Extend session
        });

        if (response.status === 200) {
          const { accessToken, refreshToken: newRefreshToken, ...userData } = response.data;
          
          setAccessToken(accessToken);
          
          // Update user profile with fresh data from server
          // Be careful not to overwrite valid data with empty junk
          if (userData && Object.keys(userData).length > 0) {
              setUser(prev => ({ ...prev, ...userData }));
              localStorage.setItem("user", JSON.stringify(userData));
          }
          
          if (newRefreshToken) {
             setCookie("refreshToken", newRefreshToken, 7);
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        // Do not verify strict logout on error to avoid flashing unauth state if API is quirky
        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = (userData, accessToken, refreshToken) => {
    setAccessToken(accessToken);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Persist profile
    if (refreshToken) {
      setCookie("refreshToken", refreshToken, 7);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    eraseCookie("refreshToken");
    // localStorage cleanup if we left anything old
    localStorage.removeItem("user"); // Clear profile
    localStorage.removeItem("accessToken"); // Cleanup legacy if exists
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
