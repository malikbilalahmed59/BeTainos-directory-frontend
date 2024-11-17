import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';

// Disable the default body parser in Next.js
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper to parse form data
const parseFormData = (req: any) => {
    const form = new formidable.IncomingForm();

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                reject(err);
            } else {
                resolve({ fields, files });
            }
        });
    });
};

export async function POST(req: NextRequest) {
    try {
        console.log("API reached");

        // Convert the NextRequest to a Node.js request-like object
        const nodeReq = await req.blob().then(async (blob) => {
            const buffer = Buffer.from(await blob.arrayBuffer());
            return Object.assign(buffer, {
                headers: Object.fromEntries(req.headers),
                method: req.method,
                url: req.url,
            });
        });

        const { fields, files } = await parseFormData(nodeReq);

        console.log("Parsed fields:", fields);
        console.log("Parsed files:", files);

        // Handle form data further (e.g., validation, saving files)
        return NextResponse.json({ message: "Form processed successfully!" });
    } catch (error) {
        console.error("Error processing form data:", error);
        return NextResponse.json({ message: "Error processing form data" }, { status: 500 });
    }
}
