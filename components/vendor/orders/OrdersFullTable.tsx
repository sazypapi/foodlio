"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import {
  Order,
  OrderStatus,
  Rider,
  PackType,
  OrderItem,
  Vendor,
  User,
} from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { formatCurrency } from "@/utils/format";

export type SerializedOrder = Omit<Order, "totalAmount"> & {
  totalAmount: number;
  rider?: Rider | null;
  packType?: (Omit<PackType, "extraPrice"> & { extraPrice: number }) | null;
  orderItems: (Omit<OrderItem, "unitPrice"> & { unitPrice: number })[];
  vendor: Omit<Vendor, "minimumPrice"> & { minimumPrice: number | null };
  user: User;
};

type Props = {
  orders: SerializedOrder[];
};

const statusStyles: Record<OrderStatus, string> = {
  PENDING_PAYMENT: "bg-gray-100 text-gray-600 border-gray-200",
  PAID: "bg-blue-50 text-blue-700 border-blue-200",
  PREPARING: "bg-amber-50 text-amber-700 border-amber-200",
  READY_FOR_PICKUP: "bg-purple-50 text-purple-700 border-purple-200",
  PICKED_UP: "bg-indigo-50 text-indigo-700 border-indigo-200",
  OUT_FOR_DELIVERY: "bg-cyan-50 text-cyan-700 border-cyan-200",
  DELIVERED: "bg-green-50 text-green-700 border-green-200",
  CANCELLED: "bg-red-50 text-red-700 border-red-200",
};

const statusLabels: Record<OrderStatus, string> = {
  PENDING_PAYMENT: "Pending Payment",
  PAID: "Paid",
  PREPARING: "Preparing",
  READY_FOR_PICKUP: "Ready for Pickup",
  PICKED_UP: "Picked Up",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

function OrdersTable({ orders }: Props) {
  return (
    <div>
      {/* <OrdersFilter /> */}
      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-60">Order</TableHead>
              <TableHead className="hidden sm:table-cell">Pack Type</TableHead>
              <TableHead className="hidden sm:table-cell">Total</TableHead>
              <TableHead className="hidden sm:table-cell">Rider</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Placed</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-12 text-gray-400"
                >
                  No orders found
                </TableCell>
              </TableRow>
            ) : (
              orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div>
                      <p className="font-medium truncate text-sm text-gray-900">
                        {(() => {
                          const fullName =
                            `${order.user.firstName ?? ""} ${order.user.lastName ?? ""}`.trim();
                          const display =
                            fullName || `#${order.id.slice(0, 8)}`;
                          return display.length > 12
                            ? `${display.slice(0, 12)}…`
                            : display;
                        })()}
                      </p>
                      <p className="text-xs text-gray-400 truncate max-w-[160px] hidden sm:inline">
                        {order.deliveryAddress}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {order.packType ? (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {order.packType.name}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <p className="text-sm text-gray-700">
                      {formatCurrency(order.totalAmount)}
                    </p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <p className="text-sm text-gray-700">
                      {order.rider ? order.rider.name : "Unassigned"}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`text-xs capitalize ${statusStyles[order.status]}`}
                    >
                      {statusLabels[order.status]}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-sm text-gray-500">
                    {formatDistanceToNow(new Date(order.createdAt), {
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="link"
                      asChild
                      className="text-muted-foreground hover:text-black transition duration-300"
                      size="sm"
                    >
                      <Link href={`/vendor/orders/${order.id}`}>
                        Actions <ArrowUpRightIcon />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default OrdersTable;
