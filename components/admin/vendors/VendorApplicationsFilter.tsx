"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { VendorStatus } from "@/generated/prisma/client";

const statuses: { label: string; value: VendorStatus | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Active", value: "ACTIVE" },
  { label: "Rejected", value: "REJECTED" },
  { label: "Suspended", value: "SUSPENDED" },
];

function FilterControls() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const currentStatus = searchParams.get("status") ?? "ALL";

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "" || value === "ALL") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`?${params.toString()}`);
    },
    [searchParams, router],
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by name, email or address..."
          className="pl-9 rounded-sm border-gray-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") updateParams("search", search);
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s.value}
            onClick={() => updateParams("status", s.value)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
              currentStatus === s.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
            }`}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function VendorApplicationsFilter() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block">
        <FilterControls />
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search..."
            className="pl-9 rounded-sm border-gray-200"
            onKeyDown={(e) => {
              const target = e.target as HTMLInputElement;
              if (e.key === "Enter") {
                const params = new URLSearchParams(window.location.search);
                params.set("search", target.value);
                window.location.search = params.toString();
              }
            }}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-sm border-gray-200">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-xl pb-8">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-left">Filter applications</SheetTitle>
            </SheetHeader>
            <FilterControls />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default VendorApplicationsFilter;
