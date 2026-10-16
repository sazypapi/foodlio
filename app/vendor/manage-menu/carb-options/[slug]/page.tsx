import { getSingleCarbOption } from "@/utils/actions";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RxValueNone } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BacktoCarbs from "@/components/vendor/manage-menu/carbs/single-page/BackToCarbsPage";
import EditCarbContainer from "@/components/vendor/manage-menu/carbs/single-page/EditCarbContainer";
import CarbMetrics, {
  serializedCarbOptionWithOrderItemCarbs,
} from "@/components/vendor/manage-menu/carbs/single-page/CarbMetrics";
async function CarbOptionsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carbOption = await getSingleCarbOption(slug);

  if (!carbOption) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Carb Option Found</EmptyTitle>
          <EmptyDescription>
            You have not created any carb options
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/carb-options/create-carb-option">
            <Button>Create New Carb Option</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  const serializedCarbOptionWithOrderItemCarbs: serializedCarbOptionWithOrderItemCarbs =
    {
      ...carbOption,
      extraPrice: carbOption.extraPrice.toNumber(),
      orderItemCarbs: carbOption.orderItemCarbs.map((oc) => ({
        ...oc,
        unitPrice: oc.unitPrice.toNumber(),
      })),
    };
  return (
    <div>
      <BacktoCarbs />
      <EditCarbContainer carbOption={serializedCarbOptionWithOrderItemCarbs} />
      <div className="sm:mt-5 mt-3">
        <CarbMetrics carbOption={serializedCarbOptionWithOrderItemCarbs} />
      </div>
    </div>
  );
}

export default CarbOptionsPage;
