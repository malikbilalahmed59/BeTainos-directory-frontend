import axiosInstance from "@/app/services/axiosInstance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const data = {
                        identifier: credentials?.email,
                        password: credentials?.password
                    };
                    const res = await axiosInstance.post("auth/local", data);

                    console.log("Response from API:", res.data);
                    const response = res.data;

                    if (response && response.jwt && response.user) {
                        const { jwt: token, user } = response;
                        return {
                            id: user.id,
                            email: user.email,
                            token,
                            username: user.username
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error during authentication:', error);
                    return null;
                }
            }
        })
    ],
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
            session.user.id = token.id as string
            session.user.email = token.email as string | null;
            session.user.token = token.token as any;
            session.user.username = token.username as string | undefined;
            return session;
        }

    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
