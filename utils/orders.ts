import { OrderStatus } from "@/generated/prisma/client";
import { Decimal } from "@/generated/prisma/client/runtime/client";

export const demoOrders: {
  id: string;
  clerkUserId: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  vendorId: string;
  riderId: string | null;
  totalAmount: Decimal;
  deliveryAddress: string;
  packTypeId: string | null; // 👈 add here
}[] = [
  {
    id: "clx001order1",
    clerkUserId: "user_2abc123def456",
    vendorId: "vendor_mamacass01",
    riderId: "rider_tunde001",
    status: OrderStatus.DELIVERED,
    totalAmount: new Decimal(8500.0),
    deliveryAddress: "12 Adeniran Ogunsanya St, Surulere, Lagos",
    createdAt: new Date("2026-07-10T12:30:00Z"),
    updatedAt: new Date("2026-07-10T13:15:00Z"),
    packTypeId: null, // 👈 add to each order
  },
  {
    id: "clx002order2",
    clerkUserId: "user_2ghi789jkl012",
    vendorId: "vendor_chickenrepublic",
    riderId: null,
    status: OrderStatus.PENDING_PAYMENT,
    totalAmount: new Decimal(4200.0),
    deliveryAddress: "45 Ademola Adetokunbo Cres, Wuse 2, Abuja",
    createdAt: new Date("2026-07-13T09:05:00Z"),
    updatedAt: new Date("2026-07-13T09:05:00Z"),
    packTypeId: null,
  },
  {
    id: "clx003order3",
    clerkUserId: "user_2mno345pqr678",
    vendorId: "vendor_domino01",
    riderId: "rider_chidi002",
    status: OrderStatus.PAID,
    totalAmount: new Decimal(12750.5),
    deliveryAddress: "7 Okpara Ave, GRA, Enugu",
    createdAt: new Date("2026-07-13T11:00:00Z"),
    updatedAt: new Date("2026-07-13T11:45:00Z"),
    packTypeId: null,
  },
  {
    id: "clx004order4",
    clerkUserId: "user_2stu901vwx234",
    vendorId: "vendor_mamacass01",
    riderId: null,
    status: OrderStatus.CANCELLED,
    totalAmount: new Decimal(3000.0),
    deliveryAddress: "23 Bodija Rd, Ibadan, Oyo State",
    createdAt: new Date("2026-07-09T18:20:00Z"),
    updatedAt: new Date("2026-07-09T18:40:00Z"),
    packTypeId: null,
  },
  {
    id: "clx005order5",
    clerkUserId: "user_2yz567abc890",
    vendorId: "vendor_kilimanjaro",
    riderId: "rider_emeka003",
    status: OrderStatus.PREPARING,
    totalAmount: new Decimal(6800.0),
    deliveryAddress: "88 Aba Rd, Port Harcourt, Rivers State",
    createdAt: new Date("2026-07-13T13:10:00Z"),
    updatedAt: new Date("2026-07-13T13:10:00Z"),
    packTypeId: null,
  },
];

export default demoOrders;
