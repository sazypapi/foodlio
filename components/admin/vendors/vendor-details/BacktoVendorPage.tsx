import { Button } from "@/components/ui/button";
import { Vendor } from "@/generated/prisma/client";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function BacktoVendorPage({ vendorData }: { vendorData: Vendor }) {
  return (
    <div className="flex justify-between items-center mb-5 gap-2">
      <div className="flex justify-between items-center gap-2">
        <Link href="/admin/vendors">
          <Button className="bg-white text-black rounded-full h-6 w-6 border-2 border-black hover:bg-black hover:text-white">
            <FaArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <p className="text-sm">Vendors</p>
      </div>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground hover:text-black transition dura"
        size="lg">
        <Link href={`/admin/vendors/analytics/${vendorData.id}`}>
          View Analytics <ArrowUpRightIcon />
        </Link>
      </Button>
    </div>
  );
}

export default BacktoVendorPage;
