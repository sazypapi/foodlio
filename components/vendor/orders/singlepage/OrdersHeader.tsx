// components/orders/order-header.tsx
import { Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { STATUS_STYLES, formatStatus } from "@/lib/order-format";
import { OrderActions } from "./OrdersActions";
import { orderWithRelations } from "./OrderContainer";

export function OrderHeader({ order }: { order: orderWithRelations }) {
  const statusClass =
    STATUS_STYLES[order.status] ?? "bg-gray-50 text-gray-700 border-gray-200";

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 sm:h-20 sm:w-20">
          <Package className="h-8 w-8 text-gray-400" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {order.name}
            </h1>
            <Badge
              variant="outline"
              className={`rounded-full border px-3 py-0.5 text-xs font-medium ${statusClass}`}
            >
              {formatStatus(order.status)}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            Order #{order.id.slice(-8)}
          </p>
        </div>
      </div>

      <OrderActions orderId={order.id} status={order.status} />
    </div>
  );
}
