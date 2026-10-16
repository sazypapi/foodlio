import { getAllVendorsSides } from "@/utils/actions";
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
import SideOptionsFilter from "@/components/vendor/manage-menu/sides/SideOptionFilter";
import SideOptionsTable, {
  serializedSideOption,
} from "@/components/vendor/manage-menu/sides/ViewAllSidesItems";
import { CreateNewSide } from "@/components/vendor/manage-menu/sides/CreateNewSide";
import Pagination from "@/components/global/Pagination";
async function ManageMenuSidesPage({
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
    allSides,
    currentPage: activePage,
    totalPages,
    vendor,
  } = await getAllVendorsSides({ availability, search, page: currentPage });
  const hasActiveFilters = Boolean(search) || Boolean(availability);
  if (allSides.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Side Found</EmptyTitle>
          <EmptyDescription>
            You have not created any side dish
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/sides/create-side">
            <Button>Create New Side</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedSideOptions: serializedSideOption[] = allSides.map(
    (side) => ({
      ...side,
      extraPrice: side.extraPrice.toNumber(),
    }),
  );
  return (
    <div>
      <VendorLayoutBreadCrumbs vendorName={vendor.name} primaryLabel="Sides" />
      <CreateNewSide />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Your Sides
      </h1>
      <SideOptionsFilter />
      <SideOptionsTable sideOptions={serializedSideOptions} />
      <Pagination currentPage={activePage} totalPages={totalPages} />
    </div>
  );
}

export default ManageMenuSidesPage;
