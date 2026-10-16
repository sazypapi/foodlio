import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { getVendorByClerkId } from "@/utils/actions";

async function HelpUsImprove() {
  const vendor = await getVendorByClerkId();
  return (
    <div>
      <VendorLayoutBreadCrumbs vendorName={vendor.name} primaryLabel="Menu" />
      Help us improve page
    </div>
  );
}

export default HelpUsImprove;
