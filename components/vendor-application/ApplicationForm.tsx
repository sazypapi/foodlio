"use client";
import FormInput from "../form/FormInput";
import CuisineSelect from "./CuisineDropdown";
import { useState } from "react";
import { CuisineType } from "@/utils/Constants";
import TextArea from "../form/TextArea";
import ApplicationFormLogo from "./ApplicationFormLogo";
import { SubmitButton } from "../form/Buttons";
import { Button } from "../ui/button";
import StateLgaSelect from "./StateLGA";

function ApplicationForm() {
  const [cuisines, setCuisines] = useState<CuisineType[]>([]);
  const [isLogoUploaded, setIsLogoUploaded] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");

  return (
    <>
      {cuisines.map((c) => (
        <input key={c} type="hidden" name="cuisineType" value={c} />
      ))}

      {/* NAME AND CUISINE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-3 sm:gap-y-0">
        <FormInput
          name="name"
          label="Name"
          placeholder="Name of establishment"
          type="text"
          className="rounded-sm"
        />
        <CuisineSelect value={cuisines} onChange={setCuisines} />
      </div>
      <StateLgaSelect onStateChange={setSelectedState} />
      <TextArea
        name="address"
        labelText="Address"
        placeholder="Enter your establishment's address"
        textAreaInput="rounded-sm"
        className="mb-0 mt-3"
      />
      {/* DESCRIPTION */}
      <TextArea
        name="description"
        labelText="Description"
        placeholder="Describe your establishment"
        textAreaInput="rounded-sm"
        className="mb-0 mt-3"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3">
        <FormInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="Main Phone Number"
          type="text"
          className="rounded-sm"
        />
        <FormInput
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
        />
      </div>
      {/* LOGO */}
      <div className="mt-3">
        <ApplicationFormLogo onUploaded={() => setIsLogoUploaded(true)} />
      </div>
      <div className="mt-3 flex w-full justify-end">
        {isLogoUploaded ? (
          <SubmitButton
            text="Submit Application"
            loadingText="Submitting"
            className="roundes-sm"
          />
        ) : (
          <Button
            className="capitalize bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border-2 border-black"
            disabled>
            Upload your logo to submit
          </Button>
        )}
      </div>
    </>
  );
}

export default ApplicationForm;
