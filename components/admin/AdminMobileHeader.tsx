"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

function AdminMobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden flex items-center justify-start border-b border-gray-200 px-4 py-3 bg-white sticky top-0 z-30"></div>
  );
}

export default AdminMobileHeader;
