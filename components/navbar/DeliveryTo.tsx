/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
function readAddressLabel(): string | null {
  const row = document.cookie
    .split("; ")
    .find((item) => item.startsWith("location="));
  if (!row) return null;
  try {
    const raw = decodeURIComponent(row.slice("location=".length));
    const parsed = JSON.parse(raw);
    return typeof parsed.label === "string" ? parsed.label : null;
  } catch (error) {
    return null;
  }
}
function DeliveryTo() {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    setLabel(readAddressLabel());
  }, []);
  return (
    <Dialog>
      <DialogTrigger className="flex w-48 lg:w-96 min-w-0 items-center gap-2 px-2 lg:px-3 text-left">
        <IoLocationSharp className="h-5 w-5 shrink-0 text-blue-700" />

        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-xs text-gray-500 font-semibold">DELIVERY TO</h3>
          <h4 className="truncate text-xs lg:text-sm">
            {label || "Select a location"}
          </h4>
        </div>

        <IoIosArrowDown className="h-5 w-5 shrink-0 text-blue-700" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DeliveryTo;
