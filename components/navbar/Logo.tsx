"use client";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <>
      <Link href="/" className="relative block w-10 h-10">
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
