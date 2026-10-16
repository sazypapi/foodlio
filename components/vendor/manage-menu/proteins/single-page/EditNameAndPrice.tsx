import FormInput from "@/components/form/FormInput";
import React from "react";
import { serializedProteinOptionWithProteinOptions } from "./EditProteinContainer";

function EditNameAndExtraPrice({
  proteinOption,
}: {
  proteinOption: serializedProteinOptionWithProteinOptions;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput
        name="name"
        type="text"
        label="Protein Option Name"
        required
        placeholder="Name"
        className="rounded-sm border"
        defaultValue={proteinOption.name}
      />
      <FormInput
        name="extraPrice"
        type="number"
        label="Price"
        required
        placeholder="Enter Protein Option Price(&#8358;)"
        className="rounded-sm border"
        defaultValue={proteinOption.extraPrice}
      />
    </div>
  );
}

export default EditNameAndExtraPrice;
