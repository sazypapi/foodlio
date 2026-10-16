// components/orders/order-vendor-delivery-card.tsx
import { Package, Bike, MapPin } from "lucide-react";
import { orderWithRelations } from "./OrderContainer";

export function OrderVendorDeliveryCard({
  order,
}: {
  order: orderWithRelations;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-2">
      <p className="text-xs font-semibold tracking-wide text-gray-400">
        VENDOR &amp; DELIVERY
      </p>
      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <Package className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{order.vendor.name}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Bike className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{order.rider ? order.rider.name : "Not yet assigned"}</span>
        </div>
        <div className="flex items-start gap-3 text-gray-700">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
          <span>{order.deliveryAddress}</span>
        </div>
      </div>
    </div>
  );
}
