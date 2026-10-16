// components/vendor/metrics/MetricsMiddleRow.tsx
import { OrderStatusDonut } from "./OrderDonut";
import { RevenueChart } from "./RevenueChart";
import type { RevenuePoint } from "@/utils/actions";

type StatusBreakdown = {
  COMPLETED: number;
  IN_PROGRESS: number;
  CANCELLED: number;
};

type MetricsMiddleRowProps = {
  statusBreakdown: StatusBreakdown;
  revenueData: RevenuePoint[];
};

export function MetricsMiddleRow({
  statusBreakdown,
  revenueData,
}: MetricsMiddleRowProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-lg border bg-white p-4 sm:p-5 col-span-1">
        <h2 className="mb-4 font-semibold">Order Statistics</h2>
        <OrderStatusDonut breakdown={statusBreakdown} />
      </div>

      <div className="rounded-lg border bg-white p-4 sm:p-5 col-span-2">
        <h2 className="mb-4 font-semibold">Sales Analytics</h2>
        <RevenueChart data={revenueData} />
      </div>
    </div>
  );
}
