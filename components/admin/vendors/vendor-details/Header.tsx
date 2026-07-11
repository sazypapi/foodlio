"use client";

import { Badge } from "@/components/ui/badge";
import { Vendor, VendorStatus } from "@/generated/prisma/client";
import Image from "next/image";
import StatusActions from "./StatusActions";

const statusStyles: Record<VendorStatus, string> = {
  PENDING: "bg-amber-50 text-amber-700 border-amber-200",
  ACTIVE: "bg-green-50 text-green-700 border-green-200",
  REJECTED: "bg-red-50 text-red-700 border-red-200",
  SUSPENDED: "bg-gray-100 text-gray-600 border-gray-200",
};

function Header({ vendorData }: { vendorData: Vendor }) {
  return (
    <div className="mt-6 mb-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border border-gray-200 shrink-0">
            <Image
              src={vendorData.logo}
              alt={vendorData.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl font-semibold text-gray-900">
                {vendorData.name}
              </h1>
              <Badge
                variant="outline"
                className={`text-xs capitalize ${statusStyles[vendorData.status]}`}>
                {vendorData.status.toLowerCase()}
              </Badge>
            </div>
          </div>
        </div>
        <StatusActions vendor={vendorData} />
      </div>
      <p className="text-sm text-gray-500 mt-4 leading-relaxed">
        {vendorData.description}
      </p>
    </div>
  );
}

export default Header;
