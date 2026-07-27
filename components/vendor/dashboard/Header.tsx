import { Order } from "@/generated/prisma/client";
import { formatCurrency } from "@/utils/format";
import React from "react";

function Header({ orders }: { orders: Order[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-4 gap-y-3">
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">
          today&apos;s orders
        </p>
        <h4 className="text-base sm:text-lg">{orders.length}</h4>
      </div>
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">
          today&apos;s revenue
        </p>
        <h4 className="text-base sm:text-lg">
          {formatCurrency(
            orders.reduce((sum, order) => sum + Number(order.totalAmount), 0),
          )}
        </h4>
      </div>
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">total orders</p>
        <h4 className="text-base sm:text-lg">{orders.length}</h4>
      </div>
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">total revenue</p>
        <h4 className="text-base sm:text-lg">
          {formatCurrency(
            orders.reduce((sum, order) => sum + Number(order.totalAmount), 0),
          )}
        </h4>
      </div>
    </div>
  );
}

export default Header;
