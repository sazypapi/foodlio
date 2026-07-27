import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import Header from "@/components/vendor/dashboard/Header";
import RecentOrders from "@/components/vendor/dashboard/RecentOrders";
import { getVendorByClerkId } from "@/utils/actions";
import { demoOrders } from "@/utils/orders";
import { clerkClient } from "@clerk/nextjs/server";
import React from "react";

async function VendorDashboard() {
  const vendor = await getVendorByClerkId();
  const order = demoOrders;
  const client = await clerkClient();
  const user = await client.users.getUser(vendor.clerkUserId);
  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      <Header orders={demoOrders} />
      <RecentOrders
        orders={demoOrders}
        customerName={
          `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Customer"
        }
      />
    </div>
  );
}

export default VendorDashboard;
