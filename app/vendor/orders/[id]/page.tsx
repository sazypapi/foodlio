import { getSingleOrder } from "@/utils/actions";
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
import { OrderContainer } from "@/components/vendor/orders/singlepage/OrderContainer";
import BackToOrdersPage from "@/components/vendor/orders/singlepage/BackToOrdersPage";
async function VendorOrdersSingle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getSingleOrder(id);
  if (!order) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Order Was Found</EmptyTitle>
          <EmptyDescription>This order doesn&apos;t exist</EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/orders">
            <Button>All Orders</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <div>
      <BackToOrdersPage />
      <OrderContainer order={order} />
    </div>
  );
}

export default VendorOrdersSingle;
