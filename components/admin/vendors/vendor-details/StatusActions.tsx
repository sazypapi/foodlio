import React from "react";
import ActionButton from "./ActionButton";
import {
  approveVendorApplication,
  reinstateVendor,
  rejectVendorApplication,
  suspendVendor,
} from "@/utils/actions";
import { Vendor } from "@/generated/prisma/client";

export default function StatusActions({ vendor }: { vendor: Vendor }) {
  if (vendor.status === "PENDING") {
    return (
      <div className="flex gap-2 shrink-0">
        <ActionButton
          action={approveVendorApplication}
          clerkUserId={vendor.clerkUserId}
          label="Approve"
          className="bg-blue-600 text-white hover:bg-blue-700"
        />
        <ActionButton
          action={rejectVendorApplication}
          clerkUserId={vendor.clerkUserId}
          label="Reject"
          className="border border-red-200 text-red-600 hover:bg-red-50"
        />
      </div>
    );
  }

  if (vendor.status === "ACTIVE") {
    return (
      <div className="flex gap-2 shrink-0">
        <ActionButton
          action={suspendVendor}
          clerkUserId={vendor.clerkUserId}
          label="Suspend"
          className="border border-gray-200 text-gray-600 hover:bg-gray-50"
        />
      </div>
    );
  }

  if (vendor.status === "SUSPENDED") {
    return (
      <div className="flex gap-2 shrink-0">
        <ActionButton
          action={reinstateVendor}
          clerkUserId={vendor.clerkUserId}
          label="Make Active"
          className="bg-blue-600 text-white hover:bg-blue-700"
        />
      </div>
    );
  }

  return null;
}
