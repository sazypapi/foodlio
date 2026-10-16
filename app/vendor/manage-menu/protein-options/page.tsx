import Pagination from "@/components/global/Pagination";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { CreateNewProtein } from "@/components/vendor/manage-menu/proteins/CreateNewProtein";
import ProteinOptionsFilter from "@/components/vendor/manage-menu/proteins/ProteinOptionFilter";
import ProteinOptionsTable, {
  serializedProteinOption,
} from "@/components/vendor/manage-menu/proteins/ViewAllProteinItems";
import { getAllVendorsProtein } from "@/utils/actions";
import Link from "next/link";
import { RxValueNone } from "react-icons/rx";
export const dynamic = "force-dynamic";
async function ProteinOptions({
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
    allProteins,
    currentPage: activePage,
    totalPages,
    vendor,
  } = await getAllVendorsProtein({ availability, search, page: currentPage });
  const hasActiveFilters = Boolean(search) || Boolean(availability);
  if (allProteins.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Protein Option Found</EmptyTitle>
          <EmptyDescription>
            You have not created any protein option
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/protein-options/create-protein-option">
            <Button>Create New Protein Option</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedProteinOptions: serializedProteinOption[] = allProteins.map(
    (protein) => ({
      ...protein,
      extraPrice: protein.extraPrice.toNumber(),
    }),
  );

  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Protein Options"
      />

      <CreateNewProtein />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Your Protein Options
      </h1>
      <ProteinOptionsFilter />
      <ProteinOptionsTable proteinOptions={serializedProteinOptions} />
      <Pagination currentPage={activePage} totalPages={totalPages} />
    </div>
  );
}

export default ProteinOptions;
