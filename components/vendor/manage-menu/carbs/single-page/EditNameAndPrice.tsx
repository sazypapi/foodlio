import FormInput from "@/components/form/FormInput";
import React from "react";
import { serializedCarbOption } from "./EditCarbContainer";

function EditNameAndExtraPrice({
  carbOption,
}: {
  carbOption: serializedCarbOption;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput
        name="name"
        type="text"
        label="Carb Option Name"
        required
        placeholder="Name"
        className="rounded-sm border"
        defaultValue={carbOption.name}
      />
      <FormInput
        name="extraPrice"
        type="number"
        label="Price"
        required
        placeholder="Enter Carb Option Price(&#8358;)"
        className="rounded-sm border"
        defaultValue={carbOption.extraPrice}
      />
    </div>
  );
}

export default EditNameAndExtraPrice;
