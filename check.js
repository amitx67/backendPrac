import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const { CLOUDINARY_CLOUD_NAME: n, CLOUDINARY_API_KEY: k, CLOUDINARY_API_SECRET: s } = process.env;
console.log("cloud name:", n, "| key length:", k?.length, "| secret length:", s?.length, "| secret starts with *:", s?.startsWith("*"));

cloudinary.config({ cloud_name: n, api_key: k, api_secret: s });
cloudinary.api.ping().then(
  (r) => console.log("OK:", r),
  (e) => console.log("FAILED:", e.error?.message || e.message)
);