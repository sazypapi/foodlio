import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

type StatCardProps = {
  label: string;
  value: string;
  icon: LucideIcon | IconType;
  accentColor?: string;
};

export function HeaderCard({
  label,
  value,
  icon: Icon,
  accentColor = "#2563eb",
}: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border bg-white p-4 sm:p-5">
      <div
        className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accentColor}1A`, color: accentColor }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="truncate text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
