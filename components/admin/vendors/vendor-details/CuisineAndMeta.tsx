import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";
import { formatDistanceToNow } from "date-fns";
import { CalendarDays } from "lucide-react";
import React from "react";

function CuisineAndMeta({ vendorData }: { vendorData: serializedVendor }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
        Details
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs text-gray-400 mb-2">Cuisine types</p>
          <div className="flex flex-wrap gap-1.5">
            {vendorData.cuisineType.map((c) => (
              <span
                key={c}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 text-gray-400 shrink-0" />
          <div>
            <p className="text-xs text-gray-400">Applied</p>
            <p className="text-sm text-gray-700">
              {formatDistanceToNow(new Date(vendorData.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuisineAndMeta;
