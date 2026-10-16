/* eslint-disable react-hooks/set-state-in-effect */
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
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const availabilityOptions: {
  label: string;
  value: "ALL" | "AVAILABLE" | "UNAVAILABLE";
}[] = [
  { label: "All", value: "ALL" },
  { label: "Available", value: "AVAILABLE" },
  { label: "Unavailable", value: "UNAVAILABLE" },
];

function SearchInput({ placeholder }: { placeholder: string }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || "",
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const searchValue = searchParams.get("search");

  useEffect(() => {
    if (!searchValue) {
      setSearch("");
    }
  }, [searchValue]);

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder={placeholder}
        className="pl-9 rounded-sm border-gray-200"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

function FilterControls() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentAvailability = searchParams.get("availability") ?? "ALL";

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "" || value === "ALL") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      params.delete("page");
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname],
  );

  return (
    <div className="flex flex-col gap-4">
      <SearchInput placeholder="Search by name or description..." />
      <div className="flex flex-wrap gap-2">
        {availabilityOptions.map((a) => (
          <button
            key={a.value}
            onClick={() => updateParams("availability", a.value)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
              currentAvailability === a.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MenuItemsFilter() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block">
        <FilterControls />
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex gap-2 mt-5">
        <SearchInput placeholder="Search..." />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-sm border-gray-200"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-xl p-3 pb-8">
            <SheetHeader className="mb-4">
              <SheetTitle className="text-left">Filter menu items</SheetTitle>
            </SheetHeader>
            <FilterControls />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default MenuItemsFilter;
