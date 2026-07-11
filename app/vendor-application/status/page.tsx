import Containers from "@/components/global/Containers";
import RejectedStatusPage from "@/components/vendor-application/vendor-status/RejectedStatusPage";
import SuspendStatusPage from "@/components/vendor-application/vendor-status/SuspendStatusPage";
import VendorStatusPage from "@/components/vendor-application/vendor-status/VendorStatusPage";
import { isUserApplicationExists } from "@/utils/actions";
import { redirect } from "next/navigation";

async function VendorApplicationStatus() {
  const doesUserHaveRecord = await isUserApplicationExists();
  if (!doesUserHaveRecord) {
    return redirect("/vendor-application");
  }
  if (doesUserHaveRecord.status === "ACTIVE") {
    return redirect("/vendor");
  }
  if (doesUserHaveRecord.status === "REJECTED") {
    return <RejectedStatusPage vendor={doesUserHaveRecord} />;
  }
  if (doesUserHaveRecord.status === "SUSPENDED") {
    return <SuspendStatusPage vendor={doesUserHaveRecord} />;
  }
  return (
    <Containers className="sm:mt-25 mt-5 px-2''">
      <VendorStatusPage vendor={doesUserHaveRecord} />
    </Containers>
  );
}

export default VendorApplicationStatus;
