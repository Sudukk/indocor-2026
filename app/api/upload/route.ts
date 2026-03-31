import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// POST — Upload file (PDF atau Image)
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const type = formData.get("type") as string | null; // "pdf" atau "image"

        if (!file) {
            return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
        }

        // Validate file type
        const allowedPdf = ["application/pdf"];
        const allowedImages = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

        if (type === "image") {
            if (!allowedImages.includes(file.type)) {
                return NextResponse.json({ error: "Hanya file JPG, PNG, atau WebP yang diperbolehkan" }, { status: 400 });
            }
        } else {
            if (!allowedPdf.includes(file.type)) {
                return NextResponse.json({ error: "Hanya file PDF yang diperbolehkan" }, { status: 400 });
            }
        }

        // Max 10MB
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: "Ukuran file maksimal 10MB" }, { status: 400 });
        }

        // Determine folder
        const folder = type === "image" ? "events" : "articles";
        const uploadsDir = path.join(process.cwd(), "public", "uploads", folder);
        await mkdir(uploadsDir, { recursive: true });

        // Generate unique filename
        const timestamp = Date.now();
        const safeFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const fileName = `${timestamp}_${safeFileName}`;
        const filePath = path.join(uploadsDir, fileName);

        // Write file
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filePath, buffer);

        const publicPath = `/uploads/${folder}/${fileName}`;

        return NextResponse.json({ filePath: publicPath, fileName }, { status: 201 });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Gagal mengupload file" }, { status: 500 });
    }
}
