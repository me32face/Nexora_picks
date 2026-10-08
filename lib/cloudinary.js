import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dtowl6hgl",
  api_key: process.env.CLOUDINARY_API_KEY || "996625685747289",
  api_secret: process.env.CLOUDINARY_API_SECRET || "xKsqN8f4I5fgR-Di_dDGwvbVY84",
  secure: true
});

/**
 * Helper to construct optimized Cloudinary URLs
 * @param {string} publicId - The Cloudinary asset public ID or path
 * @param {object} options - Optional transformations (e.g., width, crop)
 * @returns {string} Fully qualified secure Cloudinary URL
 */
export function getCloudinaryImageUrl(publicId, options = {}) {
  if (!publicId) return "";
  if (publicId.startsWith("http")) return publicId;

  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
    secure: true,
    ...options
  });
}

export default cloudinary;
