// components/vendor/metrics/RevenueChart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { RevenuePoint } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";

export function RevenueChart({ data }: { data: RevenuePoint[] }) {
  return (
    <div className="h-64 w-full overflow-hidden">
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={0}
        minHeight={256}
        debounce={200}
      >
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f1f5f9"
          />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            interval={Math.ceil(data.length / 6)}
          />
          <YAxis tickLine={false} axisLine={false} fontSize={12} hide />
          <Tooltip
            formatter={(value) => [
              formatCurrency(Number(value ?? 0)),
              "Revenue",
            ]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4F46E5"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#4F46E5" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
