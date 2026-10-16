"use client";
import FormContainer from "@/components/form/FormContainer";
import { Category, Vendor } from "@/generated/prisma/client";
import NameAndPriceSection from "./NameAndPriceSection";
import TextArea from "@/components/form/TextArea";
import DiscountAndCategory from "./DiscountAndCategory";
import AddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable from "./AddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable";
import { SubmitButton } from "@/components/form/Buttons";
import ImageFieldCreateMenuItem from "./ImageField";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createMealAction } from "@/utils/actions";
export type serializedVendor = Omit<Vendor, "minimumPrice"> & {
  minimumPrice: number | null;
};

function CreateMealFormContainer({
  vendor,
  category,
}: {
  vendor: serializedVendor;
  category: Category[];
}) {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  return (
    <div className="mt-5 p-3 border-none ">
      <FormContainer action={createMealAction}>
        <input type="hidden" name="vendorId" value={vendor.id} />
        <div className="flex flex-col gap-y-4">
          <NameAndPriceSection />
          <TextArea
            name="description"
            placeholder="Description of meal (5-15 words)"
            labelText="Description"
            className="mb-0"
            textAreaInput="border shadow-none"
          />
          <DiscountAndCategory category={category} />
          <AddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable />
          <ImageFieldCreateMenuItem
            onUploaded={() => setIsImageUploaded(true)}
          />
        </div>
        <div className="flex justify-end">
          {isImageUploaded ? (
            <SubmitButton
              className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
              text="Create Meal"
              loadingText="Creating..."
            />
          ) : (
            <Button
              className="capitalize bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border-2 border-black mt-5"
              disabled
            >
              Upload your logo to create meal
            </Button>
          )}
        </div>
      </FormContainer>
    </div>
  );
}

export default CreateMealFormContainer;
