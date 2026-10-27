/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Containers from "../global/Containers";
import Logo from "./Logo";
import Links from "./Links";
import UserIcon from "./UserIcon";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Separator } from "../ui/separator";
import DeliveryTo from "./DeliveryTo";
import { SearchBar } from "./StoreNavSearch";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

function Navbar({ isAdmin }: { isAdmin: boolean }) {
  const pathName = usePathname();
  const isStore = pathName === "/store" || pathName.startsWith("/store/");

  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    if (!isStore) {
      setHidden(false);
      lastY.current = 0;
      return;
    }

    lastY.current = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y <= 0) {
        setHidden(false);
      } else if (delta > 5 && y > 100) {
        setHidden(true);
      } else if (delta < -5) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStore]);

  if (isStore) {
    return (
      <nav
        className={`fixed inset-x-0 top-5 z-9999 transition-transform duration-200  ${
          hidden ? "-translate-y-[calc(100%+1.25rem)]" : "translate-y-0"
        }`}
      >
        <Containers className="shadow-xs px-5 py-3 xl:max-w-[80%] rounded-full border bg-white border-gray-100 hidden md:flex sm:flex-row flex-col items-center">
          <div className="flex items-center basis-5/6">
            <div className="flex items-center pr-3 ">
              <Logo />
              <h1 className="text-blue-700 font-semibold text-2xl hidden sm:inline-block">
                Foodlio
              </h1>
            </div>
            <Separator orientation="vertical" />
            <DeliveryTo />
            <Separator orientation="vertical" />
            <SearchBar />
            <Separator orientation="vertical" />
          </div>
          <div className="flex items-center basis-1/6 justify-between px-3">
            <Link href="/store/favorites">
              <div className="w-8 h-8 rounded-full bg-gray-200 border flex items-center justify-center hover:bg-gray-300 transition-all duration-300">
                <IoMdHeartEmpty className="h-4 w-4 text-blue-700" />
              </div>
            </Link>
            <div className="h-8 w-fit px-3 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all duration-500 bg-gray-200 text-blue-700 border gap-2">
              <BsCart3 className="h-4 w-4 text-blue-700" /> 0
            </div>
            <UserIcon isAdmin={isAdmin} />
          </div>
        </Containers>
        <Containers className="shadow-xs px-2 py-2 max-w-[95%] rounded-4xl border bg-white border-gray-100 md:hidden flex flex-col items">
          <div className="flex items-center justify-center">
            <div className="basis-[12.5%] ">
              <Logo />
            </div>
            <Separator orientation="vertical" className="ml-2" />
            <div className="basis-[50%] flex items-center justify-center ">
              <DeliveryTo />
            </div>
            <Separator orientation="vertical" className="mr-2" />
            <div className="flex justify-between gap-2 items-center basis-[37.5%] ">
              <div className="h-7 w-fit px-2 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all duration-500 bg-gray-200 text-blue-700 border gap-2 text-xs lg:text-sm">
                <BsCart3 className="h-4 w-4 text-blue-700" /> 0
              </div>
              <UserIcon isAdmin={isAdmin} />
            </div>
          </div>
          <Separator className="my-3" />
          <SearchBar />
        </Containers>
      </nav>
    );
  }

  return (
    <>
      <nav className="fixed inset-x-0 top-5 z-[9999] h-20 sm:hidden">
        <Containers className="flex justify-between">
          <Logo />
        </Containers>
      </nav>
      <nav className="fixed inset-x-0 top-5 z-[9999] hidden h-20 sm:block">
        <Containers className="mx-auto flex h-fit max-w-[90%]  items-center justify-between gap-20">
          <div className="flex basis-1/6 justify-start">
            <Logo />
          </div>
          <div className="basis-4/6">
            <Links />
          </div>
          <div className="flex basis-1/6 justify-end">
            <UserIcon isAdmin={isAdmin} />
          </div>
        </Containers>
      </nav>
    </>
  );
}

export default Navbar;
