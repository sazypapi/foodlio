// components/orders/order-status-form.tsx
"use client";

import { useState } from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { updateOrderStatusAction } from "@/utils/actions";
import { formatStatus } from "@/lib/order-format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderStatus } from "@/generated/prisma/client";

const SELECTABLE_STATUSES: OrderStatus[] = [
  "PENDING_PAYMENT",
  "PAID",
  "PREPARING",
  "READY_FOR_PICKUP",
  "PICKED_UP",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];

export function OrderStatusForm({
  orderId,
  status,
}: {
  orderId: string;
  status: OrderStatus;
}) {
  const [selected, setSelected] = useState<OrderStatus>(status);

  return (
    <FormContainer action={updateOrderStatusAction}>
      <input type="hidden" name="id" value={orderId} />
      <input type="hidden" name="status" value={selected} />
      <div className="flex items-center gap-2 mt-3">
        <Select
          value={selected}
          onValueChange={(value) => setSelected(value as OrderStatus)}
        >
          <SelectTrigger className="w-[180px] rounded-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SELECTABLE_STATUSES.map((s) => (
              <SelectItem key={s} value={s}>
                {formatStatus(s)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <SubmitButton text="Update Status" loadingText="Updating..." />
      </div>
    </FormContainer>
  );
}
