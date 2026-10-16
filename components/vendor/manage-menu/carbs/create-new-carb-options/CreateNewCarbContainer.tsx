"use client";
import FormContainer from "@/components/form/FormContainer";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitButton } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import NameAndExtraPrice from "./NameAndExtraPrice";
import ImageFieldCarbOption from "./CreateCarbImage";
import { createNewCarbOption } from "@/utils/actions";

function CreateNewCarbOptionContainer() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  return (
    <FormContainer action={createNewCarbOption}>
      <div className="flex justify-center flex-col w-full gap-3">
        <NameAndExtraPrice />

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isAvailable" name="isAvailable" />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <ImageFieldCarbOption onUploaded={() => setIsImageUploaded(true)} />
      </div>
      <div className="flex justify-end w-full mt-5">
        {isImageUploaded ? (
          <SubmitButton
            className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
            text="Create Carb Option"
            loadingText="Creating..."
          />
        ) : (
          <Button
            className="capitalize bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border-2 border-black mt-5"
            disabled
          >
            Upload your image to create carb option
          </Button>
        )}
      </div>
    </FormContainer>
  );
}

export default CreateNewCarbOptionContainer;
