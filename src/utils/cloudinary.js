import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localeFilePath) => {
  try {
    if (!localeFilePath) return null;
    // upload the file in cloudnary
    const response = await cloudinary.uploader.upload(localeFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded succesfully
    console.log("File Uploaded succesfully", response.url);
    fs.unlinkSync(localeFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localeFilePath);
    // remove the loacal temp file in upload failed
  }
};

export { uploadOnCloudinary };
