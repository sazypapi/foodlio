// components/orders/order-details-card.tsx
import { Wallet, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatMoney, timeAgo } from "@/lib/order-format";
import { orderWithRelations } from "./OrderContainer";

export function OrderDetailsCard({ order }: { order: orderWithRelations }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-2">
      <p className="text-xs font-semibold tracking-wide text-gray-400">
        DETAILS
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <Wallet className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{formatMoney(Number(order.totalAmount))}</span>
        </div>
        {order.packType && (
          <div>
            <p className="text-sm text-gray-400">Pack type</p>
            <Badge variant="secondary" className="mt-1 rounded-full">
              {order.packType.name}
            </Badge>
          </div>
        )}
        <div className="flex items-center gap-3 pt-1">
          <Calendar className="h-4 w-4 shrink-0 text-gray-400" />
          <div>
            <p className="text-sm text-gray-400">Placed</p>
            <p className="text-gray-700">{timeAgo(order.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
