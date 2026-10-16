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

import Link from "next/link";
import BacktoVendorPage from "@/components/admin/vendors/vendor-details/BacktoVendorPage";
import Header from "@/components/admin/vendors/vendor-details/Header";
import Body from "@/components/admin/vendors/vendor-details/Body";
import { RxValueNone } from "react-icons/rx";
import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";

async function VendorDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vendorData = await getSingleVendorRecord(slug);
  if (!vendorData) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Record found</EmptyTitle>
          <EmptyDescription>
            The requested vendor or vendor application could not be found.
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
  const serializedVendor: serializedVendor = {
    ...vendorData,
    minimumPrice: vendorData.minimumPrice
      ? vendorData.minimumPrice.toNumber()
      : null,
  };
  return (
    <div>
      <BacktoVendorPage vendorData={serializedVendor} />

      {/* Header */}
      <Header vendorData={serializedVendor} />

      <Body vendorData={serializedVendor} />
    </div>
  );
}

export default VendorDetails;
