import { createUploadthing } from "uploadthing/next";

// No authentication needed, so we remove that part
const f = createUploadthing();

// Define the file router
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async ({ file }) => {
      // This code runs after the upload is complete
      console.log("file url", file.url);
    }),
};
