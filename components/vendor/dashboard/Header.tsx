import { Order } from "@/generated/prisma/client";
import { formatCurrency } from "@/utils/format";
type SerializedOrder = Omit<Order, "totalAmount"> & { totalAmount: number };

function Header({ orders }: { orders: SerializedOrder[] }) {
  const today = new Date();

  const todaysOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return (
      orderDate.getFullYear() === today.getFullYear() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getDate() === today.getDate()
    );
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-4 gap-y-3">
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">
          today&apos;s orders
        </p>
        <h4 className="text-base sm:text-lg">{todaysOrders.length}</h4>
      </div>
      <div className="rounded-lg border px-3 pt-2">
        <p className="text-xs sm:text-sm text-neutral-500">
          today&apos;s revenue
        </p>
        <h4 className="text-base sm:text-lg">
          {todaysOrders.length === 0
            ? "No revenue yet"
            : formatCurrency(
                todaysOrders.reduce(
                  (sum, order) => sum + Number(order.totalAmount),
                  0,
                ),
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
          {orders.length === 0
            ? "No revenue yet"
            : formatCurrency(
                orders.reduce(
                  (sum, order) => sum + Number(order.totalAmount),
                  0,
                ),
              )}
        </h4>
      </div>
    </div>
  );
}

export default Header;
