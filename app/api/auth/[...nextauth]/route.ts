import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "@/app/services/axiosInstance";

// Define the NextAuth options
export const authOptions: NextAuthOptions = {
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

// Use NextAuth to create the handler
const handler = NextAuth(authOptions);

// Export only the route handlers
export { handler as GET, handler as POST };
