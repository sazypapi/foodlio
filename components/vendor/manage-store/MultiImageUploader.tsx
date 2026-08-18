/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { file } from "zod";
type MultiImageUploaderProps = {
  onUploaded: (urls: string[]) => void;
};
export default function MultiImageUploader({
  onUploaded,
}: MultiImageUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const { edgestore } = useEdgeStore();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelection = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray);

    const previews = fileArray.map((file) => URL.createObjectURL(file));
    setFilePreviews(previews);
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    if (files.length > 5) {
      toast.error("You can't upload more than 5 images");
      return;
    }
    setIsUploading(true);
    const urls: string[] = [];

    for (const file of files) {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) =>
          console.log(`Uploading ${file.name}: ${progress}%`),
        options: { temporary: true },
      });

      urls.push(res.url);
    }

    setUploadedUrls(urls);

    // Clear UI
    setFiles([]);
    setFilePreviews([]);
    if (inputRef.current) inputRef.current.value = "";

    setIsUploading(false);
    onUploaded(urls);
  };

  return (
    <div className="py-3 flex flex-col mt-4">
      {/* hidden field for form */}
      <input type="hidden" name="images" value={JSON.stringify(uploadedUrls)} />

      {/* AFTER UPLOAD → show final images */}
      {uploadedUrls.length > 0 && (
        <>
          <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-green-600">
            Images uploaded ✔
          </p>
          <div className="flex flex-wrap gap-3">
            {uploadedUrls.map((url, i) => (
              <div
                className="relative w-28 h-28 rounded-lg overflow-hidden"
                key={i}
              >
                <Image
                  src={url}
                  alt="Uploaded"
                  width={128}
                  height={128}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* BEFORE UPLOAD → show input + preview */}
      {uploadedUrls.length === 0 && (
        <>
          <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
            Restaurant Images
          </Label>
          <div className="flex items-start gap-3">
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleFileSelection(e.target.files)}
              className="border px-2 py-1 rounded-sm text-[16px] placeholder:text-[16px] w-full"
            />

            <Button
              variant="default"
              onClick={handleUpload}
              disabled={isUploading || files.length === 0}
              className="bg-white text-black hover:text-white hover:bg-black transition duration-500 border-2 border-black"
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>{" "}
          <p className="text-xs text-neutral-500">
            Up to 5 images that capture your restaurant's vibe; food, team,
            ambiance, whatever tells your story best.
          </p>
          {filePreviews.length > 0 && (
            <div className="mt-3">
              <Label className="text-xs sm:text-sm mb-1 sm:mb-2">
                Selected Images:
              </Label>
              <div className="flex flex-wrap gap-3">
                {filePreviews.map((src, index) => (
                  <div
                    className="relative w-28 h-28 rounded-lg overflow-hidden shadow-sm"
                    key={index}
                  >
                    <Image
                      src={src}
                      alt="Preview"
                      width={112}
                      height={112}
                      unoptimized={
                        src.startsWith("blob:") || src.startsWith("data:")
                      }
                      className="w-28 h-28 object-cover rounded-lg border"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
