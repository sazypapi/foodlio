"use client";
import FormInput from "@/components/form/FormInput";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import MultiImageUploader from "./MultiImageUploader";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { finsihSettingUpAccount } from "@/utils/actions";
import { serializedVendor } from "../create-new-meal/CreateMealFormContainer";

function AddImagesAndMinimumPrice({ vendor }: { vendor: serializedVendor }) {
  const [value, setValue] = useState("");
  const [imagesUploaded, setImagesUploaded] = useState<boolean>(false);
  const handleImagesUploaded = (url: string[]) => {
    setImagesUploaded(url.length > 0);
  };
  return (
    <FormContainer action={finsihSettingUpAccount}>
      <div className="w-full sm:w-[50%] md:w-[33%]">
        <Label
          className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm"

          htmlFor="minimum price"
        >
          Minimum Price
        </Label>
        <Input
          id="minimumPrice"
          name="minimumPrice"
          type="number"

          className="border placeholder:text-[16px] text-[16px]"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Minimum price in naira &#8358;"
          required
        />
      </div>
      <p className="text-xs text-neutral-500">
        The minimum amount an order has to reach before customer&apos;s orders
        go through &#40;in &#8358;&#41;
      </p>
      <MultiImageUploader onUploaded={handleImagesUploaded} />
      <div className="flex justify-end">
        {imagesUploaded ? (
          <SubmitButton
            className="bg-white text-black hover:text-white border-2 border-black transition duration-500"
            text="Finish Set Up"
            loadingText="Finishing..."
          />
        ) : (
          <p className="text-sm text-neutral-500">
            To Finish setting up your account, upload the images
          </p>
        )}
      </div>
    </FormContainer>
  );
}

export default AddImagesAndMinimumPrice;
