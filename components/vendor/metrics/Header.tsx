import { formatCurrency } from "@/utils/format";
import { HeaderCard } from "./HeaderCard";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBill } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";

type HeaderStats = {
  totalCustomers: number;
  totalRevenue: number;
  totalOrders: number;
  completionRate: number;
};
function Header({ metrics }: { metrics: HeaderStats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <HeaderCard
        icon={IoIosPeople}
        label="Total Customers"
        value={metrics.totalCustomers.toString()}
      />
      <HeaderCard
        icon={FaMoneyBill}
        label="Total Revenue"
        value={formatCurrency(metrics.totalRevenue)}
      />
      <HeaderCard
        icon={FaBoxes}
        label="Total Orders"
        value={metrics.totalOrders.toString()}
      />
      <HeaderCard
        icon={FaHourglassHalf}
        label="Completion Rate"
        value={`${metrics.completionRate.toFixed(2)}%`}
      />
    </div>
  );
}

export default Header;
