import { OrderItemSide } from "@/generated/prisma/client";
import React from "react";
export type serializedSide = Omit<OrderItemSide, "unitPrice"> & {
  unitPrice: number;
};
function OrderSupplements({}) {
  return <div></div>;
}

export default OrderSupplements;
