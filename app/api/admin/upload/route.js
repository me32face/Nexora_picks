import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dtowl6hgl",
  api_key: process.env.CLOUDINARY_API_KEY || "996625685747289",
  api_secret: process.env.CLOUDINARY_API_SECRET || "xKsqN8f4I5fgR-Di_dDGwvbVY84",
  secure: true
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const password = formData.get("password");

    const expectedPassword = process.env.ADMIN_PASSWORD;
    if (!password || password !== expectedPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary stream
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "nexora/products",
          resource_type: "image"
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id
    });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json(
      { error: "Image upload failed. " + (error.message || "") },
      { status: 500 }
    );
  }
}
