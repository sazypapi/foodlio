"use client";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CuisineType, cuisineTypes } from "@/utils/Constants";
import { Label } from "../ui/label";

function CuisineSelect({
  value,
  onChange,
}: {
  value: CuisineType[];
  onChange: (value: CuisineType[]) => void;
}) {
  const [open, setOpen] = useState(false);

  const toggle = (cuisine: CuisineType) => {
    if (value.includes(cuisine)) {
      onChange(value.filter((c) => c !== cuisine));
    } else {
      onChange([...value, cuisine]);
    }
  };

  return (
    <div>
      <Label className="capitalize mb-1 sm:mb-2 text-xs sm:text-sm">
        Cuisine Types
      </Label>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between rounded-sm px-2.5 py-1 shadow-gray-300 shadow-sm/30 border-2 border-gray-300 placeholder:text-[16px] text-[16px]">
          <span className="text-gray-500">
            {value.length === 0
              ? "Select cuisine types"
              : `${value.length} selected`}
          </span>
          <ChevronDown
            className={cn("w-3 h-3 transition-transform", open && "rotate-180")}
          />
        </button>

        {value.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {value.map((cuisine) => (
              <span
                key={cuisine}
                className="flex items-center gap-1 bg-black text-white text-xs px-3 py-1 rounded-full">
                {cuisine}
                <button type="button" onClick={() => toggle(cuisine)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {open && (
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg py-1 z-[99999] max-h-56 overflow-y-auto shadow-md">
              {cuisineTypes.map((cuisine) => (
                <button
                  type="button"
                  key={cuisine}
                  onClick={() => toggle(cuisine)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-zinc-50 transition-colors flex items-center justify-between",
                    value.includes(cuisine) && "font-medium",
                  )}>
                  {cuisine}
                  {value.includes(cuisine) && (
                    <span className="w-2 h-2 rounded-full bg-black" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CuisineSelect;
