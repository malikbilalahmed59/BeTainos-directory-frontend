import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IRegister {
    username: string,
    email: string,
    password: string
}
export const useRegister = () => {
    return useMutation<IRegister, AxiosError, any>({
        mutationFn: (data) =>
            axios.post("/api/register", data).then((res) => res.data),

        onSuccess: () => {
            toast.success("Successfully Registered.");
        },

        onError: (error: any) => {
            console.error(
                "Error:",
                error.response?.data.message || error.message
            );
            toast.error(
                error.response?.data.message ||
                error.message ||
                "failed, please try again."
            );
        },
        retry: 0,
    });
};