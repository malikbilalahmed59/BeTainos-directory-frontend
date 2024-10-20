import axiosInstance from "@/app/services/axiosInstance";
import { registrationSchema } from "@/app/validation/registrationSchema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { username, email, password } = await req.json();

        // Validate  
        const { error } = registrationSchema.validate({ username, email, password });

        if (error) {
            return new Response(JSON.stringify({ message: error.details[0].message }), {
                status: 400,
            });
        }

        await axiosInstance.post("auth/local/register", {
            username, email,
            password,
        });

        return new Response(JSON.stringify({ message: "Registration successful!" }), {
            status: 200,
        });
    } catch (err:
        any) {
        console.error("Unexpected error:", err.response?.data.error?.message);
        return new Response(JSON.stringify({ message: err.response?.data.error?.message || "Something went wrong. Please try again." }), {
            status: 500,
        });
    }
}
