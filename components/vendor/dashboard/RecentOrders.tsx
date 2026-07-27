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
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/format";
import { Order, OrderStatus } from "@/generated/prisma/client";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";

const statusStyles: Record<OrderStatus, string> = {
  PENDING_PAYMENT: "bg-gray-100 text-gray-600 hover:bg-gray-100",
  PAID: "bg-amber-100 text-amber-800 hover:bg-amber-100",
  PREPARING: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  READY_FOR_PICKUP: "bg-green-100 text-green-800 hover:bg-green-100",
  PICKED_UP: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  OUT_FOR_DELIVERY: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  DELIVERED: "bg-gray-100 text-gray-600 hover:bg-gray-100",
  CANCELLED: "bg-red-100 text-red-800 hover:bg-red-100",
};

const statusLabels: Record<OrderStatus, string> = {
  PENDING_PAYMENT: "Awaiting payment",
  PAID: "Paid",
  PREPARING: "Preparing",
  READY_FOR_PICKUP: "Ready for pickup",
  PICKED_UP: "Picked up",
  OUT_FOR_DELIVERY: "Out for delivery",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

function timeAgo(date: Date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function RecentOrders({
  orders,
  customerName,
}: {
  orders: Order[];
  customerName?: string;
}) {
  const router = useRouter();

  if (orders.length === 0) {
    return (
      <div className="rounded-lg border px-3 pt-2 mt-5">
        <p className="text-xs sm:text-sm text-neutral-500">recent orders</p>

        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RxValueNone />
            </EmptyMedia>
            <EmptyTitle>No Orders Found</EmptyTitle>
            <EmptyDescription>
              Data from your recent orders will show here when orders start
              coming in.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    );
  }

  return (
    <div className="rounded-lg border px-3 pt-2 mt-5">
      <p className="text-xs sm:text-sm text-neutral-500">recent orders</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden sm:table-cell">Order</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Items</TableHead>
            <TableHead className="text-right hidden sm:table-cell">
              Total
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right hidden sm:table-cell">
              Time
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              onClick={() => router.push(`/vendor/orders/${order.id}`)}>
              {/* <Link href={`/vendor/orders/${order.id}`}> */}
              <TableCell className="font-medium hidden sm:table-cell">
                #{order.id.slice(-6).toUpperCase()}
              </TableCell>{" "}
              {/* </Link> */}
              <TableCell>{customerName ?? "Customer"}</TableCell>
              <TableCell className="text-muted-foreground">2</TableCell>
              <TableCell className="text-right hidden sm:table-cell">
                {formatCurrency(order.totalAmount.toNumber())}
              </TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={cn("font-normal", statusStyles[order.status])}>
                  {statusLabels[order.status]}
                </Badge>
              </TableCell>
              <TableCell className="text-right text-muted-foreground hidden sm:table-cell">
                {timeAgo(order.createdAt)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default RecentOrders;
