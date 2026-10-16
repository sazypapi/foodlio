"use client";
import { OrderItemProtein, Prisma } from "@/generated/prisma/client";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import FormContainer from "@/components/form/FormContainer";
import { editProteinOption } from "@/utils/actions";
import { Button } from "@/components/ui/button";
import { SubmitButton } from "@/components/form/Buttons";
import EditImageFieldProtein from "./EditProteinImage";
import EditNameAndExtraPrice from "./EditNameAndPrice";
type ProteinOptionWithOrderItemProteins = Prisma.ProteinOptionGetPayload<{
  include: {
    orderItemProteins: true;
  };
}>;
export type serializedProteinOptionWithProteinOptions = Omit<
  ProteinOptionWithOrderItemProteins,
  "extraPrice" | "orderItemProteins"
> & {
  extraPrice: number;
  orderItemProteins: (Omit<OrderItemProtein, "unitPrice"> & {
    unitPrice: number;
  })[];
};
function EditProteinContainer({
  proteinOption,
}: {
  proteinOption: serializedProteinOptionWithProteinOptions;
}) {
  const [isImageUploading, setIsImageUploading] = useState(false);

  return (
    <FormContainer action={editProteinOption}>
      <input type="hidden" name="id" value={proteinOption.id} />
      <div className="flex justify-center flex-col w-full gap-3">
        <EditNameAndExtraPrice proteinOption={proteinOption} />
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="isAvailable"
              name="isAvailable"
              defaultChecked={proteinOption.isAvailable}
            />
            <FieldLabel htmlFor="isAvailable">Available</FieldLabel>
          </Field>
        </FieldGroup>
        <EditImageFieldProtein
          image={proteinOption.image}
          onUploadingChange={setIsImageUploading}
          key={proteinOption.image}
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
            text="Edit Protein Option"
            loadingText="Editing..."
          />
        )}
      </div>
    </FormContainer>
  );
}

export default EditProteinContainer;
