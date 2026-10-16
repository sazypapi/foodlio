"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Store,
  ShoppingBag,
  Bike,
  BarChart2,
  LogOut,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const links = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Vendors", href: "/admin/vendors", icon: Store },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Riders", href: "/admin/riders", icon: Bike },
  { label: "Metrics", href: "/admin/metrics", icon: BarChart2 },
];

function Sidebar({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const isRoot = pathname === "/admin";

  return (
    <aside
      className={cn(
        "h-screen w-64 bg-white border-r border-gray-200 flex flex-col",
        isRoot &&
          "w-full border-r-0 justify-start items-center mt-10 sm:mt-0 sm:justify-center bg-zinc-50",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          isRoot &&
            "w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm py-8",
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "hidden h-20 sm:flex items-center px-6 border-b border-gray-200",
            isRoot && "sm:hidden",
          )}
        >
          {/* <Logo /> */}
        </div>

        {isRoot && (
          <div className="px-6 pb-6 flex flex-col items-center text-center gap-1">
            {/* <Logo /> */}
            <p className="text-sm text-gray-500">
              Choose where you&apos;d like to go
            </p>
          </div>
        )}

        {/* Nav Links */}
        <nav
          className={cn(
            "flex-1 px-4 py-6 flex flex-col gap-1",
            isRoot && "px-6 py-0",
          )}
        >
          {links.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-zinc-100 hover:text-black",
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div
          className={cn(
            "px-4 py-6 border-t border-gray-200",
            isRoot && "px-6 mt-6",
          )}
        >
          <button
            onClick={() => signOut()}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-zinc-100 hover:text-black transition-all duration-150 w-full"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
