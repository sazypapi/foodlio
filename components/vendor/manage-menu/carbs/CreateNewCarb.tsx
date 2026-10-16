import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function CreateNewCarb() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/carb-options/create-carb-option">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          Create New Carb Option
          <FaPlusCircle />
        </Button>
      </Link>
    </div>
  );
}

export function ViewAllCarb() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/carb-options">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          View All Carb Options
          <FiArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
