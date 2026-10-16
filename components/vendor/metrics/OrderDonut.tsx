// components/vendor/metrics/OrderStatusDonut.tsx
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type StatusBreakdown = {
  COMPLETED: number;
  IN_PROGRESS: number;
  CANCELLED: number;
};

const STATUS_CONFIG = {
  COMPLETED: { label: "Delivered", color: "#4F46E5" },
  IN_PROGRESS: { label: "In Progress", color: "#F59E0B" },
  CANCELLED: { label: "Cancelled", color: "#EF4444" },
} as const;

export function OrderStatusDonut({
  breakdown,
}: {
  breakdown: StatusBreakdown;
}) {
  const data = (Object.keys(breakdown) as (keyof StatusBreakdown)[]).map(
    (bucket) => ({
      bucket,
      label: STATUS_CONFIG[bucket].label,
      count: breakdown[bucket],
      color: STATUS_CONFIG[bucket].color,
    }),
  );

  const total = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="relative h-48 w-48 shrink-0">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={192}
          minHeight={192}
          debounce={200}
        >
          {" "}
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="label"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              strokeWidth={0}
            >
              {data.map((entry) => (
                <Cell key={entry.bucket} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value ?? 0} orders`, ""]} />{" "}
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{total}</span>
          <span className="text-xs text-muted-foreground">Total Orders</span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto">
        {data.map((entry) => (
          <div
            key={entry.bucket}
            className="flex items-center justify-between gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">{entry.label}</span>
            </div>
            <span className="font-semibold">{entry.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
