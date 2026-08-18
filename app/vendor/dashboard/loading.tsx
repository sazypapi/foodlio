// app/vendor/dashboard/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function VendorDashboardLoading() {
  return (
    <div>
      {/* breadcrumbs (mobile only) */}
      <Skeleton className="h-4 w-40 mb-3 sm:hidden" />

      {/* toggle switch row */}
      <div className="flex items-center my-5 gap-2">
        <Skeleton className="h-6 w-32 rounded-full" />
        <Skeleton className="h-5 w-9 rounded-full" />
      </div>

      {/* Header — 4 stat cards, matching label + value structure */}
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-4 gap-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border px-3 pt-2 pb-2">
            <Skeleton className="h-3 w-20 mb-2" />
            <Skeleton className="h-5 w-14" />
          </div>
        ))}
      </div>

      {/* Recent orders table */}
      <div className="rounded-lg border px-3 pt-2 mt-5">
        <Skeleton className="h-4 w-24 mb-3" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 py-2">
              <Skeleton className="h-4 w-16 hidden sm:block" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-4 w-16 hidden sm:block" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-4 w-12 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>

      {/* Sales / revenue chart */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-3">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-[300px] w-full rounded-sm" />
      </div>
    </div>
  );
}
