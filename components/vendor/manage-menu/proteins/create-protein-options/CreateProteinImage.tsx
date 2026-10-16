"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";
import * as React from "react";
type SingleImageUploaderProps = {
  onUploaded: (url: string) => void;
};

export default function ImageFieldProteinOption({
  onUploaded,
}: SingleImageUploaderProps) {
  const [file, setFile] = React.useState<File | null>(null);
  const [filePreview, setFilePreview] = React.useState<string | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadedUrl, setUploadedUrl] = React.useState<string | null>(null);

  const { edgestore } = useEdgeStore();

  const handleFileSelection = (file: File | null) => {
    if (!file) return;
    setFile(file);
    setFilePreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);

    const uploaded = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (p) => console.log("progress", p),
      options: { temporary: true },
    });

    setUploadedUrl(uploaded.url);
    setIsUploading(false);
    setFile(null);
    setFilePreview(null);
    onUploaded(uploaded.url);
  };

  return (
    <div className="flex flex-col">
      {uploadedUrl ? (
        <>
          <p className="font-semibold text-green-600 text-xs sm:text-sm mb-1 sm:mb-2">
            Image uploaded ✔
          </p>

          <input type="hidden" name="image" value={uploadedUrl} />
          <div className="relative w-28 h-28 rounded-lg overflow-hidden">
            <Image
              src={uploadedUrl}
              alt="Uploaded"
              width={128}
              height={128}
              className="object-cover rounded-lg"
            />
          </div>
        </>
      ) : (
        <>
          <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
            Protein Option Image
          </Label>
          <div className="flex items-center gap-3 w-full">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileSelection(e.target.files?.[0] || null)}
              className="border w-full px-2 py-1 rounded-sm"
            />

            <Button
              variant="default"
              onClick={handleUpload}
              className="rounded-sm bg-white border-2 border-black hover:bg-black transition duration-500 text-black hover:text-white py-4"
              disabled={isUploading || !file}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>

          {filePreview && (
            <div className="relative w-28 h-28 rounded-lg overflow-hidden">
              <Image
                src={filePreview}
                alt="Preview"
                width={128}
                height={128}
                className="object-cover rounded-lg mt-2"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
