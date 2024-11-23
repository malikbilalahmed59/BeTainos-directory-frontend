import axios from "axios";
import { API_URL } from "../constants/constants";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use(async (config: any) => {
    const session = await getSession();  // Retrieve the session from NextAuth.js 
    if (session && session?.user?.token) {
        config.headers['Authorization'] = `Bearer ${session?.user?.token}`;
        config.headers['Content-Type'] = 'application/json';
    }

    // config.headers['ngrok-skip-browser-warning'] = '69420';

    return config;
});



export default axiosInstance;