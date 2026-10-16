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
import BottomRowRecentOrders from "@/components/vendor/metrics/BottomRowRecentOrders";
import Header from "@/components/vendor/metrics/Header";
import { MetricsMiddleRow } from "@/components/vendor/metrics/MiddleRowMetrics";
import { RevenueChart } from "@/components/vendor/metrics/RevenueChart";
import { TimeframeFilter } from "@/components/vendor/metrics/TimeFrameFilters";
import { SerializedOrder } from "@/components/vendor/orders/OrdersFullTable";
import {
  getRecentFiveOrders,
  getVendorByClerkId,
  getVendorHeaderStats,
  getVendorOrderStatusBreakdown,
  getVendorRevenueByRange,
} from "@/utils/actions";
import { TIME_RANGES, TimeRange } from "@/utils/time-range";
import { PackageSearch } from "lucide-react";
import Link from "next/link";

async function MetricsPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string; status?: string }>;
}) {
  const { range: rawRange, status } = await searchParams;
  const range: TimeRange = TIME_RANGES.includes(rawRange as TimeRange)
    ? (rawRange as TimeRange)
    : "30d";

  const [headerStats, statusBreakdown, revenueData, vendor] = await Promise.all(
    [
      getVendorHeaderStats(),
      getVendorOrderStatusBreakdown(),
      getVendorRevenueByRange(range),
      getVendorByClerkId(),
    ],
  );
  const recentOrders = await getRecentFiveOrders(status);
  if (headerStats.totalOrders === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <PackageSearch />
          </EmptyMedia>
          <EmptyTitle>No Orders Yet</EmptyTitle>
          <EmptyDescription>
            Your stats will show up here once customers start ordering
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedOrders: SerializedOrder[] = recentOrders.map((order) => ({
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
    <>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Metrics"
      />
      <div className="space-y-6 p-4 sm:p-6">
        <Header metrics={headerStats} />{" "}
        <div className="flex items-center justify-end">
          <TimeframeFilter current={range} />
        </div>
        <MetricsMiddleRow
          statusBreakdown={statusBreakdown}
          revenueData={revenueData}
        />
        <BottomRowRecentOrders orders={serializedOrders} />
      </div>
    </>
  );
}

export default MetricsPage;
