"use client";
import { SideOption } from "@/generated/prisma/client";
import { useState } from "react";
import EditNameAndExtraPrice from "./EditNameAndPrice";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import EditImageFieldSide from "./EditSideImage";
import FormContainer from "@/components/form/FormContainer";
import { editSideOption } from "@/utils/actions";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/form/Buttons";
export type serializedSideOption = Omit<SideOption, "extraPrice"> & {
  extraPrice: number;
};
function EditSideContainer({
  sideOption,
}: {
  sideOption: serializedSideOption;
}) {
  const [isImageUploading, setIsImageUploading] = useState(false);

  return (
    <FormContainer action={editSideOption}>
      <input type="hidden" name="id" value={sideOption.id} />
      <div className="flex justify-center flex-col w-full gap-3">
        <EditNameAndExtraPrice sideOption={sideOption} />
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="isAvailable"
              name="isAvailable"
              defaultChecked={sideOption.isAvailable}
            />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <EditImageFieldSide
          image={sideOption.image}
          onUploadingChange={setIsImageUploading}
          key={sideOption.image}
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
            text="Edit Side"
            loadingText="Editing..."
          />
        )}
      </div>
    </FormContainer>
  );
}

export default EditSideContainer;
