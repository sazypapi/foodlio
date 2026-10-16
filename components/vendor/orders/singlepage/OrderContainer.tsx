// components/orders/order-container.tsx

import { Prisma } from "@/generated/prisma/client";
import { OrderHeader } from "./OrdersHeader";
import { OrderVendorDeliveryCard } from "./OrderVendorDeliveryCard";
import { OrderDetailsCard } from "./OrderDetailsCard";
import { OrderItemsCard } from "./OrderItemCard";
import { OrderActivityCard } from "./OrderItemActivity";
import { OrderStatusForm } from "./OrderStatus";

//
export type orderWithRelations = Prisma.OrderGetPayload<{
  include: {
    vendor: true;
    orderItems: {
      include: {
        menuItem: true;
        orderItemProteins: { include: { proteinOption: true } };
        orderItemCarbs: { include: { carbOption: true } };
        orderItemSides: { include: { sideOption: true } };
      };
    };
    packType: true;
    rider: true;
  };
}>;

export type OrderItemWithRelations = orderWithRelations["orderItems"][number];

export function OrderContainer({ order }: { order: orderWithRelations }) {
  return (
    <div className="px-2 sm:px-4">
      <OrderHeader order={order} />
      <p className="mt-4 text-gray-500">{order.deliveryAddress}</p>
      <OrderStatusForm orderId={order.id} status={order.status} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <OrderVendorDeliveryCard order={order} />
        <OrderDetailsCard order={order} />
      </div>

      <OrderItemsCard order={order} />
      <OrderActivityCard order={order} />
    </div>
  );
}
