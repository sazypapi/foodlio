import { OrderItemCarb, Prisma } from "@/generated/prisma/client";
import { formatCurrency } from "@/utils/format";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";
import { MdOutlineInsertChart } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

type CarbOptionWithOrderItemCarbs = Prisma.CarbOptionGetPayload<{
  include: {
    orderItemCarbs: true;
  };
}>;

export type serializedCarbOptionWithOrderItemCarbs = Omit<
  CarbOptionWithOrderItemCarbs,
  "extraPrice" | "orderItemCarbs"
> & {
  extraPrice: number;
  orderItemCarbs: (Omit<OrderItemCarb, "unitPrice"> & {
    unitPrice: number;
  })[];
};

function CarbMetrics({
  carbOption,
}: {
  carbOption: serializedCarbOptionWithOrderItemCarbs;
}) {
  const today = new Date();

  const todaysOrderItemCarbs = carbOption.orderItemCarbs.filter((oc) => {
    const orderDate = new Date(oc.createdAt);
    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  });

  if (carbOption.orderItemCarbs.length === 0) {
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
            <EmptyTitle>This carb hasn&apos;t been ordered yet</EmptyTitle>
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
            {todaysOrderItemCarbs.length === 0
              ? "No orders yet today"
              : `${todaysOrderItemCarbs.length} order${todaysOrderItemCarbs.length === 1 ? "" : "s"} today`}
          </h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">
            today&apos;s revenue
          </p>
          <h4 className="text-base sm:text-lg">
            {todaysOrderItemCarbs.length === 0
              ? "No revenue yet"
              : formatCurrency(
                  todaysOrderItemCarbs.reduce(
                    (sum, oc) => sum + oc.unitPrice * oc.quantity,
                    0,
                  ),
                )}
          </h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">total orders</p>
          <h4 className="text-base sm:text-lg">
            {carbOption.orderItemCarbs.length}
          </h4>
        </div>
        <div className="rounded-lg border px-3 pt-2">
          <p className="text-xs sm:text-sm text-neutral-500">total revenue</p>
          <h4 className="text-base sm:text-lg">
            {formatCurrency(
              carbOption.orderItemCarbs.reduce(
                (sum, oc) => sum + oc.unitPrice * oc.quantity,
                0,
              ),
            )}
          </h4>
        </div>
      </div>
    </>
  );
}

export default CarbMetrics;
