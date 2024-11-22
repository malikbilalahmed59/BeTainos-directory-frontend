import axios from "axios";
import { API_URL } from "../constants/constants";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use(async (config: any) => {


    // config.headers['ngrok-skip-browser-warning'] = '69420';

    return config;
});



export default axiosInstance;