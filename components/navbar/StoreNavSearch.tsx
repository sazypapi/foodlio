/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const barRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-0 lg:px-3 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverAnchor asChild>
          <div
            ref={barRef}
            role="search"
            className="flex h-10 w-full items-center gap-2 rounded-full bg-gray-100 px-4"
          >
            <IoSearch className="h-5 w-5 shrink-0 text-blue-700" />
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setOpen(e.target.value.trim().length > 0);
              }}
              onFocus={() => value.trim() && setOpen(true)}
              placeholder="Food, drinks, groceries etc"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
            {value && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  setValue("");
                  setOpen(false);
                }}
                className="shrink-0 text-gray-500"
              >
                <IoClose className="h-5 w-5" />
              </button>
            )}
          </div>
        </PopoverAnchor>

        <PopoverContent
          align="start"
          sideOffset={8}
          className="w-(--radix-popover-trigger-width) rounded-3xl p-0"
          onOpenAutoFocus={(e: { preventDefault: () => any }) =>
            e.preventDefault()
          }
          onCloseAutoFocus={(e: { preventDefault: () => any }) =>
            e.preventDefault()
          }
          onInteractOutside={(e) => {
            const target = e.target;
            if (target instanceof Node && barRef.current?.contains(target)) {
              e.preventDefault();
            }
          }}
        >
          <div className="max-h-[480px] overflow-y-auto overscroll-contain p-4">
            <p className="pb-3 text-sm font-medium">
              Search for &quot;{value}&quot;
            </p>

            {/* placeholder rows, just to prove scrolling works */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 border-t py-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-gray-200" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">Restaurant {i + 1}</p>
                  <p className="text-xs text-gray-500">4.3 (243)</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
