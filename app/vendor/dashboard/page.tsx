import VendorLayoutBreadCrumbs from "@/components/vendor/BreadCrumbs";
import Header from "@/components/vendor/dashboard/Header";
import RecentOrders from "@/components/vendor/dashboard/RecentOrders";
import RestaurantToggleSwitch from "@/components/vendor/dashboard/RestaurantToggleSwitch";
import SalesComponent from "@/components/vendor/dashboard/SalesComponent";
import { canRestaurantBeOpened, getVendorByClerkId } from "@/utils/actions";
import { demoOrders } from "@/utils/orders";
import { clerkClient } from "@clerk/nextjs/server";

async function VendorDashboard() {
  const vendor = await getVendorByClerkId();
  const client = await clerkClient();
  const user = await client.users.getUser(vendor.clerkUserId);
  const serializedOrders = demoOrders.map((order) => ({
    ...order,
    totalAmount: order.totalAmount.toNumber(),
  }));
  const canOpenStatus = await canRestaurantBeOpened();

  return (
    <div>
      <VendorLayoutBreadCrumbs
        vendorName={vendor.name}
        primaryLabel="Dashoard"
      />
      <RestaurantToggleSwitch
        clerkId={vendor.clerkUserId}
        isRestaurantOn={vendor.closeOpenStatus}
        canOpenStatus={canOpenStatus}
      />
      <Header orders={serializedOrders} />
      <RecentOrders
        orders={serializedOrders}
        customerName={
          `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "Customer"
        }
      />
      <SalesComponent orders={serializedOrders} />
    </div>
  );
}

export default VendorDashboard;
