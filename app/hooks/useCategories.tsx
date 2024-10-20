import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance";
import { AxiosError } from "axios";
import { ICategory } from "../types/landingpage";



export const useCategories = () => {
    return useQuery<ICategory[], AxiosError>({
        queryKey: ['categories'],
        queryFn: () => axiosInstance.get('categories').then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        retry: 0,
    })
};