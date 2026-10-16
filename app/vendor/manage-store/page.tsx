import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";
import RestaurantToggleSwitch from "@/components/vendor/dashboard/RestaurantToggleSwitch";
import AddImagesAndMinimumPrice from "@/components/vendor/manage-store/AddImagesAndMinimumPrice";
import FullManageStoreForm from "@/components/vendor/manage-store/FullManageStoreForm";
import { canRestaurantBeOpened, getVendorByClerkId } from "@/utils/actions";

async function VendorManageStore() {
  const vendor = await getVendorByClerkId();
  const canOpenStatus = await canRestaurantBeOpened();
  const serializedVendor: serializedVendor = {
    ...vendor,
    minimumPrice: vendor.minimumPrice ? vendor.minimumPrice.toNumber() : null,
  };
  const reason = canOpenStatus.reason;
  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      <RestaurantToggleSwitch
        canOpenStatus={canOpenStatus}
        clerkId={vendor.clerkUserId}
        isRestaurantOn={vendor.closeOpenStatus}
      />
      {reason === "setup" ? (
        <AddImagesAndMinimumPrice vendor={serializedVendor} />
      ) : (
        <FullManageStoreForm vendor={serializedVendor} />
      )}
    </div>
  );
}

export default VendorManageStore;
