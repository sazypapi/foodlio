import { getSingleMenuItem } from "@/utils/actions";
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
import Metrics, {
  SerializedMenuItemWithOrderItems,
} from "@/components/vendor/manage-menu/single-page/Metrics";
import EditMenuItem, {
  serializedMealItem,
} from "@/components/vendor/manage-menu/single-page/EditMenuItem";
import SalesOverview from "@/components/vendor/manage-menu/single-page/SalesOverview";
import BacktoManageMenu from "@/components/vendor/manage-menu/single-page/BackToManageMenu";
async function MenuItemSinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const menuItem = await getSingleMenuItem(id);
  if (!menuItem) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>This item wasn&apos;t found</EmptyTitle>
          <EmptyDescription>This menu item doesn&apos;t exist</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/create-new-meal">
            <Button>Create New Meal</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  const serializedMenuItemWithOrderItems: SerializedMenuItemWithOrderItems = {
    ...menuItem,
    price: Number(menuItem.price),
    orderItems: menuItem.orderItems.map((item) => ({
      ...item,
      unitPrice: Number(item.unitPrice),
    })),
  };
  const { orderItems, ...menuItemWithoutOrderItems } = menuItem;
  const serializedMealItem: serializedMealItem = {
    ...menuItemWithoutOrderItems,
    price: menuItem.price.toNumber(),
  };
  return (
    <div>
      <BacktoManageMenu />
      <EditMenuItem menuItem={serializedMealItem} />
      <Metrics menuItem={serializedMenuItemWithOrderItems} />
      <SalesOverview mealOrders={serializedMenuItemWithOrderItems.orderItems} />
    </div>
  );
}

export default MenuItemSinglePage;
