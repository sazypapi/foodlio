import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function CreateMenuItemButton() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/create-new-meal">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          Create New Meal <FaPlusCircle />
        </Button>
      </Link>
    </div>
  );
}

export function ViewAllMealsButton() {
  return (
    <div className="flex w-full justify-end">
      <Link href="/vendor/manage-meals">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          View All Meals <FiArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
