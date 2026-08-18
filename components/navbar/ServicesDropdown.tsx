"use client";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const { user, isLoaded } = useUser();

  const role = user?.publicMetadata?.role;

  const serviceLinks = [
    {
      label: "Vendor",
      href: role === "VENDOR" ? "/vendor/dashboard" : "/vendor-application",
    },
    {
      label: "Rider",
      href: role === "RIDER" ? "/rider" : "/rider-application",
    },
  ];

  return (
    <div
      className="relative text-black"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button className="rounded-2xl border-2 border-dashed border-black hover:bg-white bg-white font-semibold text-black text-sm  flex items-center gap-1 tracking-widest transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none capitalize">
        Services
      </Button>

      {open && (
        <>
          <div className="absolute top-full left-0 w-full h-2" />
          <div className="absolute top-[calc(100%+4px)] left-0 w-40 bg-white border border-gray-200 rounded-md py-1 z-50">
            {isLoaded &&
              serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-xs hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ServicesDropdown;
