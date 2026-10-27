"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const pathName = usePathname();
  const isStore = pathName === "/store" || pathName.startsWith("/store/");

  return (
    <>
      <Link
        href={`/${isStore ? "store" : ""}`}
        className={`relative block ${isStore ? "md:w-7 md:h-7 h-8 w-8" : "w-10 h-10"}`}
      >
        <Image
          src="/images/Foodlio.png"
          priority
          alt="Logo"
          fill
          className="object-contain"
        />
      </Link>
    </>
  );
}

export default Logo;
