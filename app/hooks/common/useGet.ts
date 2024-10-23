"use client"

import axiosInstance from "@/app/services/axiosInstance";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const fetchData = async <T>(endpoint: string): Promise<T> => {
    const { data } = await axiosInstance.get(endpoint);
    return data
}

export const useGet = <T>(api: string): UseQueryResult<T, AxiosError> => {
    return useQuery<T, AxiosError>({
        queryKey: [api],
        queryFn: () => axiosInstance.get(api).then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        retry: 0,
    });
};
