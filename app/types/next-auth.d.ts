import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        username?: string; // Optional
        token?: string;
    }

    interface Session {
        user: {
            id: string;
            username?: string; // Optional
            token?: string;
        } & DefaultSession["user"];
    }

    interface JWT {
        id: string;
        username?: string; // Optional
        token?: string;
    }
}
