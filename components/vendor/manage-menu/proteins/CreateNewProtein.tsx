import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export function CreateNewProtein() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/protein-options/create-protein-option">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          Create New Protein Option
          <FaPlusCircle />
        </Button>
      </Link>
    </div>
  );
}

export function ViewAllProtein() {
  return (
    <div className="flex w-full justify-end mb-5">
      <Link href="/vendor/manage-menu/protein-options">
        <Button className="bg-white text-black hover:bg-black hover:text-white transition duration-500 border-black border-2">
          View All Protein Options
          <FiArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
