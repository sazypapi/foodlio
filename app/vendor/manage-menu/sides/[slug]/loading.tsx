import { Skeleton } from "@/components/ui/skeleton";

function SideSinglePageLoading() {
  return (
    <div>
      <Skeleton className="h-5 w-32 mb-5" />

      <div className="flex justify-center flex-col w-full gap-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-9 w-full" />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="flex flex-col mt-2">
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="w-32 h-32 rounded-lg" />
        </div>
      </div>

      <div className="flex justify-end">
        <Skeleton className="h-9 w-28 mt-5" />
      </div>

      <div className="mt-8">
        <Skeleton className="h-4 w-32 mb-3" />
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-10 gap-4 gap-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border px-3 pt-2 pb-3 space-y-1.5"
            >
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-5 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideSinglePageLoading;
