import axios from "axios";
import { API_URL } from "../constants/constants";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Include cookies for CORS
});

axiosInstance.interceptors.request.use(async (config) => {
    const session = await getSession(); // Retrieve session data from NextAuth.js

    // List of routes that require authentication
    const authRequiredRoutes = ["my-companies"];

    // Check if the current request URL matches any route requiring authentication
    const requiresAuth = authRequiredRoutes.some((route) => config.url?.includes(route));

    if (requiresAuth) {
        if (session && session?.user?.token) {
            config.headers["Authorization"] = `Bearer ${session.user.token}`;
        } else {
            console.error("Authentication required but no session token found.");
        }
    }

    // Ensure Content-Type is set for all requests
    config.headers["Content-Type"] = "application/json";

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
