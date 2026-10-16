import { getAllVendorsCarbs } from "@/utils/actions";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { CreateNewCarb } from "@/components/vendor/manage-menu/carbs/CreateNewCarb";
import CarbOptionsFilter from "@/components/vendor/manage-menu/carbs/CarbOptionFilter";
import CarbOptionsTable, {
  serializedCarbOption,
} from "@/components/vendor/manage-menu/carbs/ViewAllCarbItems";
import Pagination from "@/components/global/Pagination";
async function ManageCarbOptions({
  searchParams,
}: {
  searchParams: Promise<{
    availability?: string;
    search?: string;
    page?: string;
  }>;
}) {
  const { search, availability, page } = await searchParams;
  const currentPage = page ? Number(page) : 1;
  const {
    allCarbs,
    currentPage: activePage,
    totalPages,
    vendor,
  } = await getAllVendorsCarbs({ availability, search, page: currentPage });
  const hasActiveFilters = Boolean(search) || Boolean(availability);
  if (allCarbs.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Carb Option Found</EmptyTitle>
          <EmptyDescription>
            You have not created any carb option
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/carb-options/create-carb-option">
            <Button>Create New Carb Option</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedCarbOptions: serializedCarbOption[] = allCarbs.map(
    (carb) => ({
      ...carb,
      extraPrice: carb.extraPrice.toNumber(),
    }),
  );
  return (
    <div>
      <VendorLayoutBreadCrumbs vendorName={vendor.name} primaryLabel="Sides" />
      <CreateNewCarb />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Your Carb Options
      </h1>
      <CarbOptionsFilter />
      <CarbOptionsTable carbOptions={serializedCarbOptions} />
      <Pagination currentPage={activePage} totalPages={totalPages} />
    </div>
  );
}

export default ManageCarbOptions;
