/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { serializedVendor } from "../create-new-meal/CreateMealFormContainer";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import EditVendorImagesUploader from "./EditVendorImagesUploader";

function EditMultipleImage({
  vendor,
  setImageUploadingParent,
}: {
  vendor: serializedVendor;
  setImageUploadingParent: (uploading: boolean) => void;
}) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [currentUrls, setCurrentUrls] = useState<string[]>(vendor.images);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [imageUploading, setImageUploading] = useState(false);
  const removeImage = (urlToRemove: string) => {
    setCurrentUrls((prevUrls) => prevUrls.filter((img) => img !== urlToRemove));
  };
  return (
    <>
      <div className="mt-10">
        {/* {EDIT VENDOR IMAGES LABEL}Z */}
        <Label className="capitalize text-xs sm:text-sm font-semibold">
          Vendor Images
        </Label>
        {currentUrls.length > 0 && (
          <p className="text-neutral-500 text-xs mb-2">
            click the x button on the images to delete an image you want deleted
          </p>
        )}
        <input
          type="hidden"
          name="editedUrls"
          value={JSON.stringify(currentUrls)}
        />
        {/* PREVIEW IMAGE MAP */}
        <div className="grid sm:grid-cols-6 grid-cols-2 mt-3 gap-y-3 sm:gap-y-1">
          {currentUrls.map((image) => (
            <div
              key={image}
              className="relative w-28 h-28 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(image)}
                className="absolute top-1 right-1 bg-white/70 backdrop-blur-sm 
        text-black w-6 h-6 rounded-full flex items-center justify-center 
        text-xs font-bold hover:bg-white transition hover:cursor-pointer"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {/* RESET BUTTON */}
        <div className="flex flex-col gap-4 w-full">
          <div
            className={`flex ${currentUrls.length > 0 ? "justify-start" : "justify-center"} w-full`}
          >
            <button
              type="button"
              onClick={() => {
                setCurrentUrls(vendor.images);
                setImageUploaded(false);
              }}
              className="rounded-sm text-neutral-950  mt-5 bg-transparent border-black border-2 hover:bg-black hover:text-white transition duration-500 py-1 px-1 text-xs"
            >
              Reset Vendor Images
            </button>
          </div>
          {!imageUploaded && (
            <Button
              className=" text-neutral-950 mt-5 bg-transparent w-fit border-black border-2 hover:bg-black hover:text-white transition duration-500"
              onClick={() => setShowUpdate(!showUpdate)}
              type="button"
            >
              Add Images
            </Button>
          )}
        </div>
        {/* {CODE TO ADD MORE IMAGES} */}
        {showUpdate && (
          <>
            <Label
              className={`mt-5 sm:text-sm text-xs ${imageUploaded && "hidden"}`}
            >
              Add product Images.
            </Label>
            <p
              className={`text-xs text-gray-500 mb-3 ${imageUploaded && "hidden"}`}
            >
              Hold ctrl to select multiple images on pc
            </p>
            <EditVendorImagesUploader
              vendor={vendor}
              setImageUploaded={setImageUploaded}
              setImageUploading={setImageUploading}
            />
          </>
        )}
      </div>
    </>
  );
}

export default EditMultipleImage;
