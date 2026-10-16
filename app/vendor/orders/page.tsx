import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import OrdersFilter from "@/components/vendor/orders/OrdersFilter";
import OrdersTable, {
  SerializedOrder,
} from "@/components/vendor/orders/OrdersFullTable";
import Pagination from "@/components/global/Pagination";
import { getAllVendorsOrders, getVendorByClerkId } from "@/utils/actions";
import Link from "next/link";
import { RxValueNone } from "react-icons/rx";
import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";

async function VendorOrders({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string; page?: string }>;
}) {
  const { search, status, page } = await searchParams;
  const currentPage = page ? Number(page) : 1;

  const {
    orders,
    totalPages,
    currentPage: activePage,
  } = await getAllVendorsOrders({
    search: search,
    status: status,
    page: currentPage,
  });
  const hasActiveFilters = Boolean(search) || Boolean(status);
  const vendor = await getVendorByClerkId();
  if (orders.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Order Found</EmptyTitle>
          <EmptyDescription>You have no orders</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/create-new-meal">
            <Button>Go to Dashboard</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedOrders: SerializedOrder[] = orders.map((order) => ({
    ...order,
    totalAmount: order.totalAmount.toNumber(),
    orderItems: order.orderItems.map((item) => ({
      ...item,
      unitPrice: item.unitPrice.toNumber(),
    })),
    packType: order.packType
      ? {
          ...order.packType,
          extraPrice: order.packType.extraPrice.toNumber(),
        }
      : null,
    vendor: {
      ...order.vendor,
      minimumPrice: order.vendor.minimumPrice
        ? order.vendor.minimumPrice.toNumber()
        : null,
    },
  }));
  return (
    <div>
      <VendorLayoutBreadCrumbs vendorName={vendor.name} primaryLabel="Orders" />
      <OrdersFilter />
      <OrdersTable orders={serializedOrders} />{" "}
      <Pagination currentPage={activePage} totalPages={totalPages} />
    </div>
  );
}

export default VendorOrders;
