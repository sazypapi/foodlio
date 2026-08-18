import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div>
      {/* Breadcrumbs placeholder (mobile only) */}
      <Skeleton className="h-5 w-40 mb-3 sm:hidden" />

      {/* View all meals button placeholder */}
      <div className="flex w-full justify-end">
        <Skeleton className="h-10 w-40" />
      </div>

      {/* Form skeleton */}
      <div className="mt-5 p-3 border-none">
        <div className="flex flex-col gap-y-4">
          {/* Name and Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-9 w-full rounded-sm" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-9 w-full rounded-sm" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-16 w-full rounded-sm" />
          </div>

          {/* Discount and Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-9 w-full rounded-sm" />
            </div>
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-9 w-full rounded-sm" />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </div>

          {/* Image field */}
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <Skeleton className="h-10 w-40 rounded-sm mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
