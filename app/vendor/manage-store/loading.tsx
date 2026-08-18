function SkeletonBox({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-lg bg-gray-200 ${className}`} />
  );
}

export default function ManageStoreLoading() {
  return (
    <div className="mx-auto space-y-4 sm:space-y-6">
      {/* Restaurant Closed toggle row */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
        <SkeletonBox className="h-3 sm:h-4 w-32 sm:w-40 rounded-full" />
      </div>

      {/* Name / Cuisine Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-16" />
          <SkeletonBox className="h-9 w-full" />
        </div>
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-28" />
          <SkeletonBox className="h-9 w-full" />
          <div className="flex gap-2">
            <SkeletonBox className="h-6 sm:h-7 w-24 rounded-full" />
            <SkeletonBox className="h-6 sm:h-7 w-28 rounded-full" />
          </div>
        </div>
      </div>

      {/* State / Local Government Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-14" />
          <SkeletonBox className="h-9 w-full" />
        </div>
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-40" />
          <SkeletonBox className="h-9 w-full" />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <SkeletonBox className="h-3 w-20" />
        <SkeletonBox className="h-16 sm:h-20 w-full" />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <SkeletonBox className="h-3 w-24" />
        <SkeletonBox className="h-16 sm:h-20 w-full" />
      </div>

      {/* Phone / Backup Phone / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-28" />
          <SkeletonBox className="h-9 w-full" />
        </div>
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-48" />
          <SkeletonBox className="h-9 w-full" />
        </div>
        <div className="space-y-2">
          <SkeletonBox className="h-3 w-16" />
          <SkeletonBox className="h-9 w-full" />
        </div>
      </div>

      {/* Current Logo */}
      <div className="space-y-2">
        <SkeletonBox className="h-3 w-24" />
        <SkeletonBox className="h-28 w-28 sm:h-32 sm:w-32" />
      </div>

      {/* Logo Image upload */}
      <div className="space-y-2">
        <SkeletonBox className="h-3 w-24" />
        <div className="flex gap-3">
          <SkeletonBox className="h-9 flex-1" />
          <SkeletonBox className="h-9 w-20 sm:w-24" />
        </div>
      </div>

      {/* Vendor Images grid */}
      <div className="space-y-3">
        <SkeletonBox className="h-3 w-32" />
        <SkeletonBox className="h-3 w-64" />
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <SkeletonBox className="h-28 w-28 sm:h-32 sm:w-32" />
          <SkeletonBox className="h-28 w-28 sm:h-32 sm:w-32" />
          <SkeletonBox className="h-28 w-28 sm:h-32 sm:w-32" />
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4">
        <div className="flex gap-3">
          <SkeletonBox className="h-10 sm:h-11 w-40 sm:w-44 rounded-full" />
          <SkeletonBox className="h-10 sm:h-11 w-28 sm:w-32 rounded-full" />
        </div>
        <SkeletonBox className="h-10 sm:h-11 w-40 sm:w-44 rounded-full" />
      </div>
    </div>
  );
}
