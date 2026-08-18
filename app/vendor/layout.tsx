import { getVendorByClerkId } from "@/utils/actions";
import VendorLayoutClient from "@/components/vendor/VendorLayoutClient";

export default async function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getVendorByClerkId();
  return <VendorLayoutClient>{children}</VendorLayoutClient>;
}
