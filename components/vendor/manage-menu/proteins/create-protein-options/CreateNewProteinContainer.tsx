"use client";
import FormContainer from "@/components/form/FormContainer";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { SubmitButton } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";

import { createNewProteinOption } from "@/utils/actions";
import ImageFieldProteinOption from "./CreateProteinImage";
import NameAndExtraPrice from "./NameAndExtraPrice";

function CreateNewProteinOptionContainer() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  return (
    <FormContainer action={createNewProteinOption}>
      <div className="flex justify-center flex-col w-full gap-3">
        <NameAndExtraPrice />

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isAvailable" name="isAvailable" />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <ImageFieldProteinOption onUploaded={() => setIsImageUploaded(true)} />
      </div>
      <div className="flex justify-end w-full mt-5">
        {isImageUploaded ? (
          <SubmitButton
            className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
            text="Create Protein Option"
            loadingText="Creating..."
          />
        ) : (
          <Button
            className="capitalize bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border-2 border-black mt-5"
            disabled
          >
            Upload your image to create protein option
          </Button>
        )}
      </div>
    </FormContainer>
  );
}

export default CreateNewProteinOptionContainer;
