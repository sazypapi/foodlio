// components/orders/order-activity-card.tsx

import { orderWithRelations } from "./OrderContainer";

export function OrderActivityCard({ order }: { order: orderWithRelations }) {
  return (
    <div className="mt-4 rounded-2xl border border-gray-200 p-2">
      <p className="text-xs font-semibold tracking-wide text-gray-400">
        ACTIVITY
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-8">
        <div>
          <p className="text-sm text-gray-400">Created</p>
          <p className="text-gray-700">
            {order.createdAt.toLocaleString("en-NG", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Last updated</p>
          <p className="text-gray-700">
            {order.updatedAt.toLocaleString("en-NG", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
