import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import BacktoSides from "@/components/vendor/manage-menu/sides/single-page/BackToSidesPage";
import EditSideContainer from "@/components/vendor/manage-menu/sides/single-page/EditSideContainer";
import SideMetrics, {
  serializedSideOptionWithOrderItemSides,
} from "@/components/vendor/manage-menu/sides/single-page/SideMetrics";
import { serializedSideOption } from "@/components/vendor/manage-menu/sides/ViewAllSidesItems";
import { getSingleSideOption } from "@/utils/actions";
import { Link } from "lucide-react";
import { RxValueNone } from "react-icons/rx";

async function SideSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sideOption = await getSingleSideOption(slug);
  if (!sideOption) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Side Found</EmptyTitle>
          <EmptyDescription>
            You have not created any side dish
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/sides/create-side">
            <Button>Create New Side</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }
  const serializedSideOption: serializedSideOption = {
    ...sideOption,
    extraPrice: sideOption.extraPrice.toNumber(),
  };
  const serializedSideOptionWithOrderItemSides: serializedSideOptionWithOrderItemSides =
    {
      ...sideOption,
      extraPrice: sideOption.extraPrice.toNumber(),
      orderItemSides: sideOption.orderItemSides.map((os) => ({
        ...os,
        unitPrice: os.unitPrice.toNumber(),
      })),
    };
  return (
    <div>
      <BacktoSides />
      <EditSideContainer sideOption={serializedSideOption} />
      <div className="sm:mt-5 mt-3">
        <SideMetrics sideOption={serializedSideOptionWithOrderItemSides} />
      </div>
    </div>
  );
}

export default SideSinglePage;
