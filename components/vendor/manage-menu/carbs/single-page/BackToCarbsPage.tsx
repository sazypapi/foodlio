import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import BacktoSides from "../../sides/single-page/BackToSidesPage";

function BacktoCarbs() {
  return (
    <div className="flex justify-start items-center mb-5 gap-2">
      <div className="flex justify-between items-center gap-2">
        <Link href="/vendor/manage-menu/carb-options">
          <Button className="bg-white text-black rounded-full h-6 w-6 border-2 border-black hover:bg-black hover:text-white">
            <FaArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <p className="text-sm">All Carb Options</p>
      </div>
    </div>
  );
}

export default BacktoCarbs;
