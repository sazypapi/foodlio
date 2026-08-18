"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/vendor/Sidebar";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isvendorRoot = pathname === "/vendor";

  if (isvendorRoot) {
    return <Sidebar className="w-full mt-5 sm:mt-0 h-fit sm:h-screen" />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Desktop sidebar */}
      <Sidebar className="hidden sm:flex fixed top-0 left-0" />

      <div className="flex-1 min-w-0 sm:ml-64">
        <main className="sm:mt-20 sm:p-6 p-2 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
