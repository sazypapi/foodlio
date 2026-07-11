"use client";

import { useActionState } from "react";
import { approveVendorApplication } from "@/utils/actions";
import { useEffect } from "react";
import { toast } from "sonner";

const initialState = { message: "" };

function ApproveVendorButton({ clerkUserId }: { clerkUserId: string }) {
  const [state, formAction, isPending] = useActionState(
    approveVendorApplication,
    initialState,
  );

  useEffect(() => {
    if (state.message) toast(state.message);
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="clerkId" value={clerkUserId} />
      <button
        type="submit"
        disabled={isPending}
        className="text-sm px-3 py-1.5 rounded-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200">
        {isPending ? "Approving..." : "Approve"}
      </button>
    </form>
  );
}

export default ApproveVendorButton;
