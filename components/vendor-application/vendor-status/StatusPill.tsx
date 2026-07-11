import { VendorStatus } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";

export default function StatusPill({ status }: { status: VendorStatus }) {
  const config: Record<VendorStatus, { label: string; className: string }> = {
    PENDING: { label: "Pending", className: "bg-amber-50 text-amber-700" },
    ACTIVE: { label: "Active", className: "bg-emerald-50 text-emerald-700" },
    SUSPENDED: {
      label: "Suspended",
      className: "bg-orange-50 text-orange-700",
    },
    REJECTED: { label: "Rejected", className: "bg-red-50 text-red-700" },
  };

  const { label, className } = config[status];

  return (
    <span
      className={cn("text-xs font-medium rounded-full px-2.5 py-1", className)}>
      {label}
    </span>
  );
}
