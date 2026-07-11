import VendorApplicationsTable from "@/components/admin/vendors/VendorApplicationsTable";
import { getAllVendorApplications } from "@/utils/actions";
import { VendorStatus } from "@/generated/prisma/client";
import AdminLayoutBreadCrumbs from "@/components/admin/BreadCrumbs";

export default async function AdminVendorsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string }>;
}) {
  const { search, status } = await searchParams;
  const vendors = await getAllVendorApplications();

  const filtered = vendors.filter((vendor) => {
    const matchesStatus =
      !status || status === "ALL"
        ? true
        : vendor.status === (status as VendorStatus);

    const matchesSearch = search
      ? [vendor.name, vendor.email, vendor.address].some((field) =>
          field.toLowerCase().includes(search.toLowerCase()),
        )
      : true;

    return matchesStatus && matchesSearch;
  });

  return (
    <div>
      <AdminLayoutBreadCrumbs primaryLabel="Vendors" />
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Vendor applications
      </h1>
      <VendorApplicationsTable vendors={filtered} />
    </div>
  );
}
