"use client";
import { CarbOption } from "@/generated/prisma/client";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import FormContainer from "@/components/form/FormContainer";
import { editCarbOption } from "@/utils/actions";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/form/Buttons";
import EditImageFieldCarb from "./EditCarbImage";
import EditNameAndExtraPrice from "./EditNameAndPrice";
export type serializedCarbOption = Omit<CarbOption, "extraPrice"> & {
  extraPrice: number;
};
function EditCarbContainer({
  carbOption,
}: {
  carbOption: serializedCarbOption;
}) {
  const [isImageUploading, setIsImageUploading] = useState(false);

  return (
    <FormContainer action={editCarbOption}>
      <input type="hidden" name="id" value={carbOption.id} />
      <div className="flex justify-center flex-col w-full gap-3">
        <EditNameAndExtraPrice carbOption={carbOption} />
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="isAvailable"
              name="isAvailable"
              defaultChecked={carbOption.isAvailable}
            />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <EditImageFieldCarb
          image={carbOption.image}
          onUploadingChange={setIsImageUploading}
          key={carbOption.image}
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
            text="Edit Carb Option"
            loadingText="Editing..."
          />
        )}
      </div>
    </FormContainer>
  );
}

export default EditCarbContainer;
