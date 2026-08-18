import { Skeleton } from "@/components/ui/skeleton";
import BacktoManageMenu from "@/components/vendor/manage-menu/single-page/BackToManageMenu";

function MenuItemSinglePageLoading() {
  return (
    <div>
      <BacktoManageMenu />
      {/* edit meal heading */}
      <Skeleton className="h-5 w-24 mb-6" />

      {/* Meal Name + Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-14 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-24 w-full" />
      </div>

      {/* Discount + Menu Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* checkboxes row */}
      <div className="flex flex-wrap gap-6 mb-6">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-28" />
      </div>

      {/* Current Image */}
      <Skeleton className="h-4 w-28 mb-2" />
      <Skeleton className="h-28 w-28 rounded-md mb-6" />

      {/* Food Image uploader */}
      <div className="mb-6">
        <Skeleton className="h-4 w-20 mb-2" />
        <div className="flex gap-3">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>

      {/* Edit Meal button */}
      <div className="flex justify-end mb-8">
        <Skeleton className="h-10 w-28" />
      </div>

      <div className="border-t pt-6">
        {/* sales overview heading */}
        <Skeleton className="h-5 w-32 mb-6" />

        {/* metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border px-3 pt-2 pb-3">
              <Skeleton className="h-3 w-20 mb-2" />
              <Skeleton className="h-5 w-16" />
            </div>
          ))}
        </div>

        {/* filter row */}
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* chart */}
        <div className="border-2 border-neutral-100 rounded-sm p-4">
          <Skeleton className="h-4 w-32 mb-4" />
          <Skeleton className="h-[220px] w-full" />
        </div>
      </div>
    </div>
  );
}

export default MenuItemSinglePageLoading;
