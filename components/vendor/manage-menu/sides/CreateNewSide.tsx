import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function CreateNewSide() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/sides/create-side">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          Create New Side <FaPlusCircle />
        </Button>
      </Link>
    </div>
  );
}

export function ViewAllSides() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/sides">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          View All Sides <FiArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
