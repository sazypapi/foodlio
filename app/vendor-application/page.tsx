import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import Containers from "@/components/global/Containers";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationForm from "@/components/vendor-application/ApplicationForm";
import {
  isUserApplicationExists,
  submitVendorApplicationForm,
} from "@/utils/actions";
import { redirect } from "next/navigation";

async function VendorApplication() {
  const userApplicationStatus = await isUserApplicationExists();
  if (userApplicationStatus) {
    return redirect("/vendor-application/status");
  }
  return (
    <Containers className="mt-10 sm:mt-20 px-2">
      <Card className="rounded-lg p-4 h-full mt-15 sm:mt-25 overflow-visible">
        <CardHeader className="p-0">
          <CardTitle className="font-bold">Apply to be a vendor</CardTitle>
        </CardHeader>
        <FormContainer action={submitVendorApplicationForm}>
          <ApplicationForm />
        </FormContainer>
      </Card>
    </Containers>
  );
}

export default VendorApplication;
