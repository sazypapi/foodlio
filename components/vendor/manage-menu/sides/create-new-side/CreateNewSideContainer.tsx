"use client";
import FormContainer from "@/components/form/FormContainer";
import React, { useState } from "react";
import NameAndExtraPrice from "./NameAndExtraPrice";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import CreateSide from "@/app/vendor/manage-menu/sides/create-side/page";
import ImageFieldSide from "./CreateSideImage";
import { SubmitButton } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import { createNewSide } from "@/utils/actions";

function CreateNewSideContainer() {
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  return (
    <FormContainer action={createNewSide}>
      <div className="flex justify-center flex-col w-full gap-3">
        <NameAndExtraPrice />

        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="isAvailable" name="isAvailable" />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <ImageFieldSide onUploaded={() => setIsImageUploaded(true)} />
      </div>
      <div className="flex justify-end w-full mt-5">
        {isImageUploaded ? (
          <SubmitButton
            className="bg-white text-black border-2 border-black hover:bg-black hover:text-white transition duration-500 mt-5"
            text="Create Side"
            loadingText="Creating..."
          />
        ) : (
          <Button
            className="capitalize bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border-2 border-black mt-5"
            disabled
          >
            Upload your image to create side
          </Button>
        )}
      </div>
    </FormContainer>
  );
}

export default CreateNewSideContainer;
