// components/orders/order-items-card.tsx

import { orderWithRelations } from "./OrderContainer";
import { OrderItemRow } from "./OrderItemRow";

export function OrderItemsCard({ order }: { order: orderWithRelations }) {
  return (
    <div className="mt-4 rounded-2xl border border-gray-200 p-2">
      <p className="text-xs font-semibold tracking-wide text-gray-400">
        ORDER ITEMS
      </p>
      {order.orderItems.length === 0 ? (
        <p className="mt-3 italic text-gray-400">No items on this order.</p>
      ) : (
        <div className="mt-4 divide-y divide-gray-100">
          {order.orderItems.map((item) => (
            <OrderItemRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
