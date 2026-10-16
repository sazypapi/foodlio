import { cn } from "@/lib/utils";

function Pulse({ className }: { className?: string }) {
  return <div className={cn("animate-pulse bg-gray-200 rounded", className)} />;
}

export default function VendorDetailsSkeleton() {
  return (
    <div>
      {/* BacktoVendorPage */}
      <div className="mt-4">
        <Pulse className="h-4 w-32" />
      </div>

      {/* Header */}
      <div className="mt-6 mb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            <Pulse className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl shrink-0" />
            <div className="min-w-0 pt-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Pulse className="h-6 w-40" />
                <Pulse className="h-5 w-16 rounded-full" />
              </div>
            </div>
          </div>
          {/* StatusActions */}
          <div className="flex gap-2 shrink-0">
            <Pulse className="h-9 w-24 rounded-md" />
            <Pulse className="h-9 w-9 rounded-md" />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <Pulse className="h-3.5 w-full max-w-md" />
          <Pulse className="h-3.5 w-2/3 max-w-sm" />
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* ContactInfo */}
        <div className="border border-gray-200 rounded-lg p-4">
          <Pulse className="h-3 w-16 mb-4" />
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Pulse className="h-4 w-4 rounded-full shrink-0" />
                <Pulse className="h-3.5 w-40" />
              </div>
            ))}
          </div>
        </div>

        {/* CuisineAndMeta */}
        <div className="border border-gray-200 rounded-lg p-4">
          <Pulse className="h-3 w-14 mb-4" />
          <div className="flex flex-col gap-4">
            <div>
              <Pulse className="h-3 w-20 mb-2" />
              <div className="flex flex-wrap gap-1.5">
                <Pulse className="h-6 w-16 rounded-full" />
                <Pulse className="h-6 w-20 rounded-full" />
                <Pulse className="h-6 w-14 rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Pulse className="h-4 w-4 rounded-full shrink-0" />
              <div className="space-y-1.5">
                <Pulse className="h-2.5 w-14" />
                <Pulse className="h-3.5 w-24" />
              </div>
            </div>
          </div>
        </div>

        {/* AdminNote */}
        <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
          <Pulse className="h-3 w-24 mb-3" />
          <Pulse className="h-3.5 w-full max-w-lg mb-2" />
          <Pulse className="h-3.5 w-2/3 max-w-sm" />
          <div className="w-full flex justify-end mt-5">
            <Pulse className="h-4 w-4" />
          </div>
        </div>

        {/* Images */}
        <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
          <Pulse className="h-3 w-14 mb-3" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <Pulse key={i} className="aspect-square rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
