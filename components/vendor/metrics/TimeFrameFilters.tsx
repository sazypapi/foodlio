// components/vendor/metrics/TimeframeFilter.tsx
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { TIME_RANGES, type TimeRange } from "@/utils/time-range";

const LABELS: Record<TimeRange, string> = {
  "7d": "Last 7 Days",
  "30d": "Last 30 Days",
  "90d": "Last 90 Days",
  year: "This Year",
  all: "All Time",
};

export function TimeframeFilter({ current }: { current: TimeRange }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setRange(range: TimeRange) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("range", range);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          {LABELS[current]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {TIME_RANGES.map((range) => (
          <DropdownMenuItem key={range} onClick={() => setRange(range)}>
            {LABELS[range]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
