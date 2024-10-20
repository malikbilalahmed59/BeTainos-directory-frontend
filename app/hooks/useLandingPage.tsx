import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
import { AxiosError } from "axios";
import { ILandingPage } from "../types/landingpage";



export const useLandingPage = () => {
    return useQuery<ILandingPage[], AxiosError>({
        queryKey: ['landing-page'],
        queryFn: () => axiosInstance.get('landing-page').then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        retry: 0,
    })
};