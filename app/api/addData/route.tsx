import axiosInstance from '@/app/services/axiosInstance';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import { getServerSession } from 'next-auth/next'; // Use getServerSession 
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/app/helper/sendEmail';
// Define the NextAuth options
const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const data = {
                        identifier: credentials?.email,
                        password: credentials?.password,
                    };
                    const res = await axiosInstance.post("auth/local", data);
                    const response = res.data;

                    if (response && response.jwt && response.user) {
                        const { jwt: token, user } = response;
                        return {
                            id: user.id,
                            email: user.email,
                            token,
                            username: user.username,
                        };
                    } else if (response && response.error) {
                        throw new Error(response.error.message || "Authentication failed");
                    }

                    return null;
                } catch (error: any) {
                    console.error("Error during authentication:", error);
                    throw new Error(error.message || "An error occurred");
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.token = user.token;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = session.user || {};
            session.user.id = token.id as string;
            session.user.email = token.email as string | null;
            session.user.token = token.token as string;
            session.user.username = token.username as string | undefined;
            return session;
        },
    },
    session: {
        strategy: "jwt", // Explicitly set to "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export async function POST(req: NextRequest) {
    try {
        // Retrieve the session from NextAuth
        const session: any = await getServerSession(authOptions);
        if (!session || !session.user?.token) {
            return new Response(
                JSON.stringify({ message: "Unauthorized: No valid session found." }),
                { status: 401 }
            );
        }

        const body = await req.json();

        await axiosInstance.post(
            'companies',
            { data: body },
            {
                headers: {
                    Authorization: `Bearer ${session.user.token}`, // Authorization header
                    'Content-Type': 'application/json',
                },
            }
        );
        sendEmail({
            company_info_name: body?.Name,
            email: body?.Email,
            company_info_phone: body?.Phone,
        }); // Send email

        return new Response(
            JSON.stringify({ message: "Registration successful!" }),
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error processing JSON data:", error.response || error.message);
        return NextResponse.json(
            { message: "Error processing JSON data", details: error.response?.data || error.message },
            { status: 500 }
        );
    }
}


