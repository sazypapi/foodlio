import VendorApplicationsTable from "@/components/admin/vendors/VendorApplicationsTable";
import { getAllVendorApplications } from "@/utils/actions";
import { VendorStatus } from "@/generated/prisma/client";
import AdminLayoutBreadCrumbs from "@/components/admin/BreadCrumbs";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";

import Link from "next/link";
import { Button } from "@/components/ui/button";
export default async function AdminVendorsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string }>;
}) {
  const { search, status } = await searchParams;
  const vendors = await getAllVendorApplications({
    status: status,
    search: search,
  });
  const hasActiveFilters = Boolean(status) || Boolean(search);
  if (vendors.length === 0 && !hasActiveFilters) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Vendors Found</EmptyTitle>
          <EmptyDescription>
            There are no vendors registered yet
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/admin/dashboard">
            <Button>Admin Dashboard</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div>
      <AdminLayoutBreadCrumbs primaryLabel="Vendors" />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Vendor applications
      </h1>
      <VendorApplicationsTable vendors={vendors} />
    </div>
  );
}
