import Containers from "@/components/global/Containers";
import { Skeleton } from "@/components/ui/skeleton";

function ApplicationFormSkeleton() {
  return (
    <Containers className="mt-10 sm:mt-20 px-2 max-w-4xl mx-auto">
      <div className="rounded-lg p-4 border mt-15 sm:mt-25">
        <div className="animate-pulse">
          {/* NAME AND CUISINE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-3 sm:gap-y-0">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
          </div>

          {/* STATE / LGA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-y-3 sm:gap-y-0 mt-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="space-y-2 mt-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-20 w-full rounded-sm" />
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2 mt-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-20 w-full rounded-sm" />
          </div>

          {/* PHONE NUMBERS + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full rounded-sm" />
            </div>
          </div>

          {/* LOGO */}
          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-16" />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-3 flex w-full justify-end">
            <Skeleton className="h-10 w-48 rounded-sm" />
          </div>
        </div>
      </div>
    </Containers>
  );
}

export default ApplicationFormSkeleton;
