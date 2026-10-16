import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import CreateMealFormContainer, {
  serializedVendor,
} from "@/components/vendor/create-new-meal/CreateMealFormContainer";
import { ViewAllMealsButton } from "@/components/vendor/manage-store/CreateMenuItemButton";
import { getVendorByClerkId, getVendorsCategory } from "@/utils/actions";

async function CreateNewMealPage() {
  const vendor = await getVendorByClerkId();
  const vendorCategory = await getVendorsCategory();
  const serializedVendor: serializedVendor = {
    ...vendor,
    minimumPrice: vendor.minimumPrice ? vendor.minimumPrice.toNumber() : null,
  };
  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      <ViewAllMealsButton />
      <CreateMealFormContainer
        vendor={serializedVendor}
        category={vendorCategory}
      />
    </div>
  );
}

export default CreateNewMealPage;
