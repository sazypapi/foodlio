import FormInput from "@/components/form/FormInput";
import React from "react";

function NameAndExtraPrice() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <FormInput
        name="name"
        type="text"
        label="Side Name"
        required
        placeholder="Name"
        className="rounded-sm border"
      />
      <FormInput
        name="extraPrice"
        type="number"
        label="Price"
        required
        placeholder="Enter Side Price(&#8358;)"
        className="rounded-sm border"
      />
    </div>
  );
}

export default NameAndExtraPrice;
