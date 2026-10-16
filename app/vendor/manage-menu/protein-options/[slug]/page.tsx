import { getSingleProteinOption } from "@/utils/actions";
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
import EditProteinContainer, {
  serializedProteinOptionWithProteinOptions,
} from "@/components/vendor/manage-menu/proteins/single-page/EditProteinContainer";
import BacktoProteins from "@/components/vendor/manage-menu/proteins/single-page/BackToProteinPage";
import ProteinMetrics from "@/components/vendor/manage-menu/proteins/single-page/ProteinMetrics";
async function SinglePageProtein({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proteinOption = await getSingleProteinOption(slug);

  if (!proteinOption) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RxValueNone />
          </EmptyMedia>
          <EmptyTitle>No Protein Option Found</EmptyTitle>
          <EmptyDescription>
            You have not created any protein options
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Link href="/vendor/manage-menu/protein-options/create-protein-option">
            <Button>Create New Protein Option</Button>
          </Link>
        </EmptyContent>
      </Empty>
    );
  }

  const serializedProteinOptionWithProteinOptions: serializedProteinOptionWithProteinOptions =
    {
      ...proteinOption,
      extraPrice: proteinOption.extraPrice.toNumber(),
      orderItemProteins: proteinOption.orderItemProteins.map((oip) => ({
        ...oip,
        unitPrice: oip.unitPrice.toNumber(),
      })),
    };
  return (
    <div>
      <BacktoProteins />
      <EditProteinContainer
        proteinOption={serializedProteinOptionWithProteinOptions}
      />
      <div className="sm:mt-5 mt-3">
        <ProteinMetrics
          proteinOption={serializedProteinOptionWithProteinOptions}
        />
      </div>
    </div>
  );
}

export default SinglePageProtein;
