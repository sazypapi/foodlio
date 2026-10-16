// components/orders/order-actions.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { cancelOrderAction } from "@/utils/actions";

export function OrderActions({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) {
  const [pending, setPending] = useState(false);

  if (status === "DELIVERED" || status === "CANCELLED") return null;

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-full">
            Cancel Order
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this
              order.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="capitalize bg-white text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 border-2 border-red-500">
                Cancel
              </Button>
            </DialogClose>
            <FormContainer action={cancelOrderAction}>
              <input type="hidden" name="id" value={orderId} />
              <SubmitButton text="Cancel Order" loadingText="Cancelling..." />
            </FormContainer>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* <Button
        variant="outline"
        onClick={handleCancel}
        disabled={pending}
        className="rounded-full"
      >
        {pending ? "Cancelling..." : "Cancel Order"}
      </Button> */}
    </>
  );
}
