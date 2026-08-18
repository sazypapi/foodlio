import { Order, OrderItem, Prisma } from "@/generated/prisma/client";
import { formatCurrency } from "@/utils/format";
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
import { MdOutlineInsertChart } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
type MenuItemWithOrderItems = Prisma.MenuItemGetPayload<{
  include: {
    orderItems: true;
  };
}>;

export type SerializedMenuItemWithOrderItems = Omit<
  MenuItemWithOrderItems,
  "price" | "orderItems"
> & {
  price: number;
  orderItems: (Omit<OrderItem, "unitPrice"> & {
    unitPrice: number;
  })[];
};
function Metrics({ menuItem }: { menuItem: SerializedMenuItemWithOrderItems }) {
  const today = new Date();

  const todaysOrders = menuItem.orderItems.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  });
  if (menuItem.orderItems.length === 0) {
    return (
      <div>
        <p className="text-sm text-neutral-600 w-fit flex items-center gap-2 border-b-2 border-neutral-600 mb-3">
          sales overview
          <MdOutlineInsertChart />
        </p>
        <Empty className="p-1">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RxValueNone />
            </EmptyMedia>
            <EmptyTitle>This item has no sales</EmptyTitle>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }
  return (
    <>
      <Separator className="my-8" />
      <p className="text-sm text-neutral-600 w-fit flex items-center gap-2 border-b-2 border-neutral-600 mb-3">
        sales overview
        <MdOutlineInsertChart />
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-4 gap-y-3">
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">
            today&apos;s orders
          </p>
          <h4 className="text-base sm:text-lg">
            {todaysOrders.length === 0
              ? "No orders yet today"
              : `${todaysOrders.length} order${todaysOrders.length === 1 ? "" : "s"} today`}
          </h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">
            today&apos;s revenue
          </p>
          <h4 className="text-base sm:text-lg">
            {todaysOrders.length === 0
              ? "No revenue yet"
              : formatCurrency(
                  todaysOrders.reduce(
                    (sum, order) => sum + Number(order.unitPrice),
                    0,
                  ),
                )}
          </h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">total orders</p>
          <h4 className="text-base sm:text-lg">{menuItem.orderItems.length}</h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">total revenue</p>
          <h4 className="text-base sm:text-lg">
            {formatCurrency(
              menuItem.orderItems.reduce(
                (sum, order) => sum + Number(order.unitPrice),
                0,
              ),
            )}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Metrics;
