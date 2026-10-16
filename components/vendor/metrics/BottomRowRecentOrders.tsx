import Link from "next/link";
import OrdersTable, { SerializedOrder } from "../orders/OrdersFullTable";

import BottomRowFilter from "./BottomRowFilters";
import { FiArrowUpRight } from "react-icons/fi";

function BottomRowRecentOrders({ orders }: { orders: SerializedOrder[] }) {
  return (
    <div className="rounded-lg border bg-white p-4 sm:p-5">
      <div className="flex w-full justify-between">
        <p className="text-xs text-muted-foreground mb-3">Recent Orders</p>
        <Link href="/vendor/orders">
          <p className="text-xs flex justify-between items-center underline hover:text-blue-600 duration-500 text-muted-foreground mb-3">
            All Orders <FiArrowUpRight />
          </p>
        </Link>
      </div>
      <BottomRowFilter />
      <OrdersTable orders={orders} />
    </div>
  );
}

export default BottomRowRecentOrders;
