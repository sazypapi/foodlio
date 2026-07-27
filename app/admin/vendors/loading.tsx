function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 border-b border-gray-100 last:border-0">
      <div className="h-9 w-9 rounded-md bg-gray-100 animate-pulse shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="h-3.5 w-32 bg-gray-100 rounded animate-pulse mb-2" />
        <div className="h-3 w-44 bg-gray-100 rounded animate-pulse hidden sm:block" />
      </div>
      <div className="hidden sm:flex gap-1 w-32 shrink-0">
        <div className="h-5 w-14 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-5 w-14 bg-gray-100 rounded-full animate-pulse" />
      </div>
      <div className="hidden sm:block w-36 shrink-0">
        <div className="h-3 w-28 bg-gray-100 rounded animate-pulse mb-1.5" />
        <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
      </div>
      <div className="h-5 w-16 bg-gray-100 rounded-full animate-pulse shrink-0" />
      <div className="hidden sm:block h-3 w-16 bg-gray-100 rounded animate-pulse shrink-0" />
      <div className="h-3 w-20 bg-gray-100 rounded animate-pulse shrink-0" />
    </div>
  );
}

export default function VendorsLoading() {
  return (
    <div>
      {/* Breadcrumb skeleton */}
      <div className="h-3 w-40 bg-gray-100 rounded animate-pulse mb-6" />

      {/* Title skeleton */}
      <div className="h-6 w-48 bg-gray-100 rounded animate-pulse mb-6" />

      {/* Filter skeleton */}
      <div className="hidden sm:flex flex-col gap-4">
        <div className="h-9 w-full bg-gray-100 rounded-sm animate-pulse" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-20 bg-gray-100 rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden flex gap-2">
        <div className="h-9 flex-1 bg-gray-100 rounded-sm animate-pulse" />
        <div className="h-9 w-9 bg-gray-100 rounded-sm animate-pulse shrink-0" />
      </div>

      {/* Table skeleton */}
      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    </div>
  );
}
