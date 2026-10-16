"use client";
import { OrderItem } from "@/generated/prisma/client";
import { useState } from "react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";
import { Button } from "@/components/ui/button";

import FiltersForSalesOverview from "./FiltersForSalesOverview";
import RevenueChart from "../../dashboard/RevenueChart";
type SerializedMealOrders = Omit<OrderItem, "unitPrice"> & {
  unitPrice: number;
};
const getDaysAgo = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d;
};
function SalesComponent({
  mealOrders,
}: {
  mealOrders: SerializedMealOrders[];
}) {
  const [range, setRange] = useState("allTime");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  const filteredOrders = mealOrders.filter((order) => {
    const orderDate = new Date(order.createdAt);
    if (range === "7days") return orderDate >= getDaysAgo(7);
    if (range === "30days") return orderDate >= getDaysAgo(30);
    if (range === "90days") return orderDate >= getDaysAgo(90);
    if (range === "thisYear")
      return orderDate.getFullYear() === new Date().getFullYear();
    if (range === "custom" && customStart && customEnd) {
      return (
        orderDate >= new Date(customStart) && orderDate <= new Date(customEnd)
      );
    }
    return true;
  });

  const groupByDay = (orders: SerializedMealOrders[]) => {
    const map: Record<string, number> = {};

    orders.forEach((order) => {
      const date = new Date(order.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      map[date] = (map[date] || 0) + order.unitPrice;
    });

    return Object.entries(map).map(([date, revenue]) => ({ date, revenue }));
  };
  const groupByMonth = (orders: SerializedMealOrders[]) => {
    const map: Record<string, number> = {};

    orders.forEach((order) => {
      const date = new Date(order.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      map[date] = (map[date] || 0) + order.unitPrice;
    });

    return Object.entries(map).map(([date, revenue]) => ({ date, revenue }));
  };
  const groupByWeek = (orders: SerializedMealOrders[]) => {
    const map: Record<string, number> = {};

    orders.forEach((order) => {
      const date = new Date(order.createdAt);
      const week = Math.ceil(
        (date.getDate() +
          new Date(date.getFullYear(), date.getMonth(), 1).getDay()) /
          7,
      );
      const label = `W${week} ${date.toLocaleDateString("en-US", { month: "short" })}`;
      map[label] = (map[label] || 0) + order.unitPrice;
    });

    return Object.entries(map).map(([date, revenue]) => ({ date, revenue }));
  };
  const getGrouping = () => {
    if (range === "7days" || range === "30days") return "day";
    if (range === "90days") return "week";
    if (range === "custom" && customStart && customEnd) {
      const days =
        (new Date(customEnd).getTime() - new Date(customStart).getTime()) /
        (1000 * 60 * 60 * 24);
      if (days <= 30) return "day";
      if (days <= 90) return "week";
      return "month";
    }
    return "month";
  };

  const grouping = getGrouping();
  const revenueData =
    grouping === "day"
      ? groupByDay(filteredOrders)
      : grouping === "week"
        ? groupByWeek(filteredOrders)
        : groupByMonth(filteredOrders);
  return (
    <div className="mt-5">
      <section className="flex justify-start items-center">
        <FiltersForSalesOverview
          customEnd={customEnd}
          customStart={customStart}
          range={range}
          setCustomEnd={setCustomEnd}
          setCustomStart={setCustomStart}
          setRange={setRange}
        />
      </section>
      {filteredOrders.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RxValueNone />
            </EmptyMedia>
            <EmptyTitle className="text-neutral-500">No Sale Found</EmptyTitle>
            <EmptyDescription className="text-neutral-600">
              No sale fits your filter
            </EmptyDescription>
            <EmptyContent className="flex-row justify-center gap-2">
              <Button
                className="bg-transparent text-black border-2 border-black hover:text-white hover:bg-black transition duration-500"
                onClick={() => {
                  setRange("allTime");
                  setCustomStart("");
                  setCustomEnd("");
                }}
              >
                Clear Filters
              </Button>
            </EmptyContent>
          </EmptyHeader>
        </Empty>
      ) : (
        <RevenueChart data={revenueData} />
      )}
    </div>
  );
}

export default SalesComponent;
