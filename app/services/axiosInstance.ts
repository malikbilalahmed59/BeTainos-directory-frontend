import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    // const token = localStorage.getItem(TokenKey);
    // config.headers['ngrok-skip-browser-warning'] = `69420`;
    // if (token) { 
    //     config.headers.Authorization = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    // }

    return config;
});



export default axiosInstance;