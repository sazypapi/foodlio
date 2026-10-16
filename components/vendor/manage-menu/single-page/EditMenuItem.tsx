"use client";
import FormContainer from "@/components/form/FormContainer";
import { Category, MenuItem } from "@/generated/prisma/client";
import { editMenuItem } from "@/utils/actions";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import NameAndPrice from "./NameAndPrice";
import TextArea from "@/components/form/TextArea";
import DiscountAndCategory from "./DiscountAndCategory";
import EditAddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable from "./EditAddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable";
import EditImageFieldCreateMenuItem from "./EditImage";
import { SubmitButton } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
export type serializedMealItem = Omit<MenuItem, "price"> & { price: number };
function EditMenuItem({
  menuItem,
  categories,
}: {
  menuItem: serializedMealItem;
  categories: Category[];
}) {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const categoryName = categories.find(
    (category) => category.id === menuItem.categoryId,
  )?.name;
  return (
    <div className="my-5">
      <p className="text-sm text-neutral-600 w-fit flex items-center gap-2 border-b-2 border-neutral-600 mb-3">
        edit meal <FaRegEdit />
      </p>
      <FormContainer action={editMenuItem}>
        <input type="hidden" name="mealId" value={menuItem.id} />
        <div className="flex flex-col gap-y-4">
          <NameAndPrice name={menuItem.name} price={menuItem.price} />
          <TextArea
            name="description"
            placeholder="Description of meal (5-15 words)"
            labelText="Description"
            className="mb-0"
            defaultValue={menuItem.description}
            textAreaInput="border shadow-none"
          />
          <DiscountAndCategory
            category={categoryName!}
            discount={menuItem.discount}
            categories={categories}
          />
          <EditAddCarbohydrateAddSidesAddProteinOptionsAndIsAvailable
            isAvailable={menuItem.isAvailable}
            isProtein={menuItem.addProteinOptions}
            isCarbohydrate={menuItem.addCarbohydrateOptions}
            isSides={menuItem.addSides}
          />
          <EditImageFieldCreateMenuItem
            image={menuItem.image}
            onUploadingChange={setIsImageUploading}
            key={menuItem.image}
          />
        </div>
        <div className="flex justify-end">
          {isImageUploading ? (
            <Button
              disabled
              className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
            >
              Image is Uploading
            </Button>
          ) : (
            <SubmitButton
              className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
              text="Edit Meal"
              loadingText="Editing..."
            />
          )}
        </div>
      </FormContainer>
    </div>
  );
}

export default EditMenuItem;
