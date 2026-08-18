import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import { CreateMenuItemButton } from "@/components/vendor/manage-store/CreateMenuItemButton";
import { getAllMenuItems, getVendorByClerkId } from "@/utils/actions";
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
async function ManageMenu({
  searchParams,
}: {
  searchParams: Promise<{ availability?: string; search?: string }>;
}) {
  const { search, availability } = await searchParams;
  const vendor = await getVendorByClerkId();
  const allMenuItems = await getAllMenuItems(vendor.id, {
    search: search,
    availability: availability,
  });
  const hasActiveFilters = Boolean(search) || Boolean(availability);

  if (allMenuItems.length === 0 && !hasActiveFilters) {
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
  const serializedMenuItems = allMenuItems.map((item) => ({
    ...item,
    price: item.price.toNumber(),
  }));
  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      <CreateMenuItemButton />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Manage Your Menu
      </h1>
      <MenuItemsTable menuItems={serializedMenuItems} />
    </div>
  );
}

export default ManageMenu;
