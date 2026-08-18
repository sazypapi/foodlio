"use client";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toggleRestaurantOnAndOff } from "@/utils/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
type canOpenStatus = { canOpen: boolean; reason: string };
function RestaurantToggleSwitch({
  isRestaurantOn,
  clerkId,
  canOpenStatus,
}: {
  isRestaurantOn: boolean;
  clerkId: string;
  canOpenStatus: canOpenStatus;
}) {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(isRestaurantOn);
  const [isToggleActionRunning, setIsToggleActionRunning] =
    useState<boolean>(false);
  const pathName = usePathname();

  const handleToggle = async (checked: boolean) => {
    setIsToggleOn(checked);
    setIsToggleActionRunning(true);
    try {
      const result = await toggleRestaurantOnAndOff({
        clerkId,
        toggleValueString: checked ? "true" : "false",
      });
      toast(result.message);
    } catch (error) {
      console.error("Toggle failed:", error);

      setIsToggleOn(!checked);
      toast("Something went wrong, please try again");
    } finally {
      setIsToggleActionRunning(false);
    }
  };

  return (
    <>
      {canOpenStatus.canOpen ? (
        <div className="flex items-center mb-5 gap-2">
          {isToggleOn ? (
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Restaurant Open
            </Badge>
          ) : (
            <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              Restaurant Closed
            </Badge>
          )}
          <Switch
            id="switch-size-sm"
            checked={isToggleOn}
            disabled={isToggleActionRunning}
            onCheckedChange={handleToggle}
          />
        </div>
      ) : (
        <div className="flex items-center mb-5 gap-2">
          <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
            Restaurant Closed
          </Badge>
          <Switch id="switch-size-sm" disabled />
          {canOpenStatus.reason === "setup" ? (
            <p className="text-neutral-600 text-[10px] sm:text-xs mt-2">
              To open restaurant,{" "}
              {pathName === "/vendor/manage-store" ? (
                "finish setting up your account"
              ) : (
                <Link
                  href="/vendor/manage-store"
                  className="underline hover:text-neutral-900"
                >
                  finish setting up your account
                </Link>
              )}
            </p>
          ) : (
            <p className="text-neutral-600 text-[10px] sm:text-xs mt-2">
              To open restaurant you need at least 3 meals.{" "}
              <Link
                href="/vendor/create-new-meal"
                className="underline hover:text-neutral-900"
              >
                Create Meals
              </Link>
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default RestaurantToggleSwitch;
