"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

  const toastLogout = async () => {
    await signOut();
    toast("Successfully Logged Out");
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {profileImage ? (
            <Image
              src={profileImage}
              width={28}
              height={28}
              alt="Profile pic"
              className=" h-8 w-8 rounded-full object-cover cursor-pointer"
            />
          ) : (
            <div className="flex align-middle items-center cursor-pointer">
              <LuUser className="h-8 w-8 bg-primary text-gray-300 rounded-full" />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="z-[9999] w-fit">
          <Link href="/dashboard/account">
            <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
              My Account
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/orders">
            <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
              Orders
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/wishlist">
            <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
              Wishlist
            </DropdownMenuItem>
          </Link>
          {isAdmin && (
            <Link href="/admin/dashboard">
              <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
                Admin Dashboard
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuItem
            className="active:bg-neutral-100 transition duration-150 cursor-pointer"
            onClick={toastLogout}>
            <SignOutButton>Logout</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex align-middle items-center cursor-pointer">
          <LuUser className="h-8 w-8 bg-primary text-gray-300 rounded-full" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top" className="z-[9999]">
        <Show when="signed-out">
          <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
            <SignInButton mode="modal">Login</SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem className="active:bg-neutral-100 transition duration-150">
            <SignUpButton mode="modal">Register</SignUpButton>
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserIcon;
