"use client";
import { useState } from "react";
import { LuUser } from "react-icons/lu";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
  useClerk,
} from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

function UserIcon({ isAdmin }: { isAdmin: boolean }) {
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [open, setOpen] = useState(false);

  const toastLogout = async () => {
    await signOut();
    toast("Successfully Logged Out");
    setOpen(false);
  };

  if (!isLoaded) {
    return (
      <div className="flex align-middle items-center">
        <LuUser className="h-8 w-8 bg-primary text-gray-300 rounded-full" />
      </div>
    );
  }

  if (isSignedIn && user) {
    const profileImage = user.imageUrl;
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {profileImage ? (
          <Image
            src={profileImage}
            width={28}
            height={28}
            alt="Profile pic"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
        ) : (
          <div className="flex align-middle items-center cursor-pointer">
            <LuUser className="h-8 w-8 bg-primary text-gray-300 rounded-full" />
          </div>
        )}

        {open && (
          <>
            <div className="absolute top-full right-0 w-full h-2" />
            <div className="absolute top-[calc(100%+4px)] right-0 w-44 bg-white border border-gray-200 rounded-md py-1 z-50 text-black">
              <Link href="/dashboard/account">
                <div
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                  onClick={() => setOpen(false)}
                >
                  My Account
                </div>
              </Link>
              <Link href="/dashboard/orders">
                <div
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                  onClick={() => setOpen(false)}
                >
                  Orders
                </div>
              </Link>
              <Link href="/dashboard/wishlist">
                <div
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                  onClick={() => setOpen(false)}
                >
                  Wishlist
                </div>
              </Link>
              {isAdmin && (
                <Link href="/admin/dashboard">
                  <div
                    className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                    onClick={() => setOpen(false)}
                  >
                    Admin Dashboard
                  </div>
                </Link>
              )}
              <div
                className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                onClick={toastLogout}
              >
                <SignOutButton>Logout</SignOutButton>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex align-middle items-center cursor-pointer">
        <LuUser className="h-8 w-8 bg-primary text-gray-300 rounded-full" />
      </div>

      {open && (
        <>
          <div className="absolute top-full right-0 w-full h-2" />
          <div className="absolute top-[calc(100%+4px)] right-0 w-40 bg-white border border-gray-200 rounded-md py-1 z-50 text-black">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <div
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                  onClick={() => setOpen(false)}
                >
                  Login
                </div>
              </SignInButton>
              <SignUpButton mode="modal">
                <div
                  className="px-4 py-2 text-xs hover:bg-gray-50 cursor-pointer transition duration-150"
                  onClick={() => setOpen(false)}
                >
                  Register
                </div>
              </SignUpButton>
            </Show>
          </div>
        </>
      )}
    </div>
  );
}

export default UserIcon;
