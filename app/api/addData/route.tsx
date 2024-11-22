import axiosInstance from '@/app/services/axiosInstance';
import { getServerSession } from 'next-auth/next'; // Use getServerSession 
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

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

        console.log("Session Token:", session.user.token);
        const formData = await req.formData();
        // Convert browser-native FormData to Node.js FormData

        // Convert FormData to a plain object
        const formObject: any = {};
        for (const [key, value] of formData.entries()) {
            formObject[key] = value;
        }

        console.log('Form Object:', formObject);;

        // Send the FormData to the external API
        const response = await axiosInstance.post('companies', { data: formObject }, {
            headers: {
                'Authorization': `Bearer ${session.user.token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(response)
        return new Response(JSON.stringify({ message: "Registration successful!" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error processing form data:", error.response || error.message);
        return NextResponse.json({ message: "Error processing form data" }, { status: 500 });
    }
}
