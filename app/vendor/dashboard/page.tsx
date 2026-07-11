import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { getVendorByClerkId } from "@/utils/actions";
import React from "react";

async function VendorDashboard() {
  const vendor = await getVendorByClerkId();
  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      Vendor Dashboard
    </div>
  );
}

export default VendorDashboard;
