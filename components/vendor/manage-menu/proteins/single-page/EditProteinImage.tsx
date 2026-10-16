"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";
import * as React from "react";
type SingleImageUploaderProps = {
  onUploadingChange?: (uploading: boolean) => void;

  image: string;
};

export default function EditImageFieldProtein({
  onUploadingChange,
  image,
}: SingleImageUploaderProps) {
  const [file, setFile] = React.useState<File | null>(null);
  const [filePreview, setFilePreview] = React.useState<string | null>(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadedUrl, setUploadedUrl] = React.useState<string>(image);
  const [anotherImageUploaded, setAnotherImageUploaded] = React.useState(false);
  const { edgestore } = useEdgeStore();

  const handleFileSelection = (file: File | null) => {
    if (!file) return;
    setFile(file);
    setFilePreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!file) return;
    setIsUploading(true);
    onUploadingChange?.(true);

    const uploaded = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (p) => console.log("progress", p),
      options: { temporary: true },
    });

    setUploadedUrl(uploaded.url);
    setIsUploading(false);
    onUploadingChange?.(false);

    setFile(null);
    setFilePreview(null);
    setAnotherImageUploaded(true);
  };

  return (
    <>
      <div className="flex flex-col">
        {anotherImageUploaded ? (
          <>
            <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-green-600">
              Image uploaded ✔
            </p>
            <Image
              src={uploadedUrl}
              alt="Uploaded"
              width={128}
              height={128}
              className="object-cover rounded-lg w-32 h-32"
            />
          </>
        ) : (
          <>
            <p className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-black">
              Current Image
            </p>
            <Image
              src={uploadedUrl}
              alt="Uploaded"
              width={128}
              height={128}
              className="object-cover rounded-lg w-32 h-32"
            />
          </>
        )}

        <input type="hidden" name="image" value={uploadedUrl} />
        {!anotherImageUploaded && (
          <>
            <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm mt-5">
              Protein Option Image
            </Label>
            <div className="flex items-center gap-3 w-full">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFileSelection(e.target.files?.[0] || null)
                }
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
              <Image
                src={filePreview}
                alt="Preview"
                width={128}
                height={128}
                className="object-cover rounded-lg mt-2 w-32 h-32"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
