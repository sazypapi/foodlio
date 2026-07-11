import Containers from "@/components/global/Containers";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function Pulse({ className }: { className?: string }) {
  return <div className={cn("animate-pulse bg-zinc-200 rounded", className)} />;
}

export default function VendorStatusPageSkeleton() {
  return (
    <Containers className="sm:mt-25 mt-5 px-2">
      <Card className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Status banner skeleton */}
          <div className="bg-black rounded-2xl px-6 py-8 sm:px-10 sm:py-10 text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <div className="w-6 h-6 rounded-full bg-white/20 animate-pulse" />
            </div>
            <Pulse className="h-6 w-64 mx-auto mb-3 bg-white/10" />
            <Pulse className="h-4 w-80 max-w-full mx-auto mb-2 bg-white/10" />
            <Pulse className="h-4 w-56 mx-auto mb-6 bg-white/10" />
            <Pulse className="h-6 w-40 mx-auto rounded-full bg-white/10" />
          </div>

          {/* Application details card skeleton */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <Pulse className="h-4 w-36" />
              <Pulse className="h-6 w-20 rounded-full" />
            </div>

            <div className="px-6 sm:px-8 py-6 space-y-6">
              {/* Identity */}
              <div className="flex items-start gap-4">
                <Pulse className="w-14 h-14 rounded-xl shrink-0" />
                <div className="min-w-0 flex-1 space-y-2">
                  <Pulse className="h-4 w-40" />
                  <Pulse className="h-3.5 w-full max-w-sm" />
                  <Pulse className="h-3.5 w-2/3 max-w-xs" />
                </div>
              </div>

              {/* Contact + address */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Pulse className="h-3 w-12" />
                  <Pulse className="h-4 w-32" />
                </div>
                <div className="space-y-2">
                  <Pulse className="h-3 w-12" />
                  <Pulse className="h-4 w-36" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Pulse className="h-3 w-14" />
                  <Pulse className="h-4 w-2/3" />
                </div>
              </div>

              {/* Cuisine types */}
              <div>
                <Pulse className="h-3 w-24 mb-2" />
                <div className="flex flex-wrap gap-1.5">
                  <Pulse className="h-6 w-16 rounded-full" />
                  <Pulse className="h-6 w-20 rounded-full" />
                  <Pulse className="h-6 w-14 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Containers>
  );
}
