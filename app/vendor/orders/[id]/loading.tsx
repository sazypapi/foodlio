// app/vendor/orders/[id]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function OrderDetailLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-5 w-16" />
      </div>

      <div className="flex items-center gap-4">
        <Skeleton className="h-16 w-16 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <Skeleton className="h-4 w-48" />

      <div className="flex gap-2">
        <Skeleton className="h-10 w-40 rounded-full" />
        <Skeleton className="h-10 w-32 rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-4 sm:p-5 space-y-4">
          <Skeleton className="h-3 w-32" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-44" />
          </div>
        </div>

        <div className="rounded-lg border p-4 sm:p-5 space-y-4">
          <Skeleton className="h-3 w-16" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-4 sm:p-5 space-y-4">
        <Skeleton className="h-3 w-24" />
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-12" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="border-t pt-4 space-y-3">
          <Skeleton className="h-3 w-14" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-14" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border p-4 sm:p-5 space-y-4">
        <Skeleton className="h-3 w-16" />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-14" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
