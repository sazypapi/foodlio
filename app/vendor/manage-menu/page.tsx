import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { CreateMenuItemButton } from "@/components/vendor/manage-store/CreateMenuItemButton";
import { getAllMenuItems } from "@/utils/actions";
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
import MenuItemsTable from "@/components/vendor/manage-menu/ViewAllMenuItems";
import Pagination from "@/components/global/Pagination";
async function ManageMenu({
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
    menuItems,
    totalPages,
    currentPage: activePage,
    vendor,
  } = await getAllMenuItems({
    search: search,
    availability: availability,
    page: currentPage,
  });
  const hasActiveFilters = Boolean(search) || Boolean(availability);

  if (menuItems.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Menu Item Found</EmptyTitle>
          <EmptyDescription>
            You have not created any menu item
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/create-new-meal">
            <Button>Create New Meal</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedMenuItems = menuItems.map((item) => ({
    ...item,
    price: item.price.toNumber(),
  }));
  return (
    <div>
      <VendorLayoutBreadCrumbs vendorName={vendor.name} primaryLabel="Menu" />
      <CreateMenuItemButton />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Your Menu
      </h1>
      <MenuItemsTable menuItems={serializedMenuItems} />
      <Pagination currentPage={activePage} totalPages={totalPages} />
    </div>
  );
}

export default ManageMenu;
