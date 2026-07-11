import { getSingleVendorRecord } from "@/utils/actions";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

import { IconFolderCode } from "@tabler/icons-react";
import Link from "next/link";
import BacktoVendorPage from "@/components/admin/vendors/vendor-details/BacktoVendorPage";
import Header from "@/components/admin/vendors/vendor-details/Header";
import Body from "@/components/admin/vendors/vendor-details/Body";

async function VendorDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const vendorData = await getSingleVendorRecord(id);
  if (!vendorData) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconFolderCode />
          </EmptyMedia>
          <EmptyTitle>No Projects Yet</EmptyTitle>
          <EmptyDescription>
            This vendor application doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/admin/dashboard">
            <Button>Admin Dashboard</Button>
          </Link>
          <Link href="/admin/vendors">
            <Button variant="outline">All Applications</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  return (
    <div>
      <BacktoVendorPage vendorData={vendorData} />

      {/* Header */}
      <Header vendorData={vendorData} />

      <Body vendorData={vendorData} />
    </div>
  );
}

export default VendorDetails;
