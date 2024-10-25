import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../services/axiosInstance";

export interface IContactForm {
    Name: string;
    Email: string;
    Subject: string;
    Message: string;
    Categories: "Company" | "Professional" | "Annonceur";
}

export const useContactSubmit = () => {
    return useMutation<IContactForm, AxiosError, any>({
        mutationFn: (data) =>
            axiosInstance.post("/contact-us-submits", { data }).then((res) => res.data),

        onSuccess: (res) => {
            console.log(res)
            toast.success("Successfully Submited.");
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