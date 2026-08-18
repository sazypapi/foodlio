"use client";
import FormInput from "@/components/form/FormInput";
import TextArea from "@/components/form/TextArea";
import CuisineSelect from "@/components/vendor-application/CuisineDropdown";
import { Vendor } from "@/generated/prisma/client";
import { CuisineType } from "@/utils/Constants";
import { use, useState } from "react";
import EditVendorLogo from "./EditVendorLogo";
import { serializedVendor } from "../create-new-meal/CreateMealFormContainer";
import EditMultipleImage from "./EditMultipleImage";
import { Separator } from "@/components/ui/separator";
import FormContainer from "@/components/form/FormContainer";
import { editVendorDetails } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import { Button } from "@/components/ui/button";
import EditStateLGA from "./EditStateLGA";

function FullManageStoreForm({ vendor }: { vendor: serializedVendor }) {
  const [cuisines, setCuisines] = useState<CuisineType[]>(
    vendor.cuisineType as CuisineType[],
  );
  const [logoIsBeingUploaded, setIsLogoBeingUploaded] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const [isLogoUploaded, setIsLogoUploaded] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  return (
    <FormContainer action={editVendorDetails}>
      {cuisines.map((c) => (
        <input key={c} type="hidden" name="cuisineType" value={c} />
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-3 sm:gap-y-0">
        <FormInput
          name="name"
          defaultValue={vendor.name}
          label="Name"
          placeholder="Name of establishment"
          type="text"
          className="rounded-sm"
        />
        <CuisineSelect onChange={setCuisines} value={cuisines} />
      </div>
      <EditStateLGA
        onStateChange={setSelectedState}
        defaultState={vendor.state}
        defaultLga={vendor.localGovernmentArea}
      />
      <TextArea
        name="address"
        labelText="Address"
        placeholder="Enter your establishment's address"
        textAreaInput="rounded-sm"
        className="mb-0 mt-3"
        defaultValue={vendor.address}
      />
      <TextArea
        defaultValue={vendor.description}
        name="description"
        labelText="Description"
        placeholder="Describe your establishment"
        textAreaInput="rounded-sm"
        className="mb-0 mt-3"
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3">
        <FormInput
          defaultValue={vendor.phoneNumber}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Main Phone Number"
          type="text"
          className="rounded-sm"
        />
        <FormInput
          defaultValue={
            vendor.backUpPhoneNumber ? vendor.backUpPhoneNumber : undefined
          }
          name="backUpPhoneNumber"
          label="Back Up Phone Number (optional)"
          placeholder="Back Up Phone Number"
          type="text"
          className="rounded-sm"
          required={false}
        />
        <FormInput
          name="email"
          label="Email"
          placeholder="Email"
          type="email"
          className="rounded-sm"
          defaultValue={vendor.email}
        />
      </div>
      <div className="mt-3">
        <EditVendorLogo
          image={vendor.logo}
          onUploadingChange={setIsLogoBeingUploaded}
        />
      </div>
      <EditMultipleImage
        vendor={vendor}
        setImageUploadingParent={setImageUploading}
      />
      <div className="p-3 w-full flex justify-end">
        {logoIsBeingUploaded ? (
          <Button disabled>Logo is Being uploaded</Button>
        ) : imageUploading ? (
          <Button disabled>Vendor Images are being uploaded</Button>
        ) : (
          <SubmitButton text="Update vendor details " loadingText="Updating" />
        )}
      </div>
    </FormContainer>
  );
}

export default FullManageStoreForm;
