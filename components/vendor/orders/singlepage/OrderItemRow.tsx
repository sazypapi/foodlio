// components/orders/order-item-row.tsx
import { OrderItemWithRelations } from "./OrderContainer";
import { Separator } from "@/components/ui/separator";
import { Prisma } from "@/generated/prisma/client";
import { formatCurrency } from "@/utils/format";
type serializedExtraAndPriceAndQuantity = {
  id: string;
  name: string;
  unitPrice: Prisma.Decimal;
  quantity: number;
};
export function OrderItemRow({ item }: { item: OrderItemWithRelations }) {
  const extras = [
    item.orderItemProteins.map((p) => p.proteinOption.name),
    ...item.orderItemSides.map((s) => s.sideOption.name),
    ...item.orderItemCarbs.map((c) => c.carbOption.name),
  ].filter(Boolean);

  const extrasAndTheirPricesAndQuantity: serializedExtraAndPriceAndQuantity[] =
    [
      ...item.orderItemCarbs.map((c) => ({
        id: c.id,
        name: c.carbOption.name,
        unitPrice: c.unitPrice,
        quantity: c.quantity,
      })),
      ...item.orderItemProteins.map((p) => ({
        id: p.id,
        name: p.proteinOption.name,
        unitPrice: p.unitPrice,
        quantity: p.quantity,
      })),
      ...item.orderItemSides.map((s) => ({
        id: s.id,
        name: s.sideOption.name,
        unitPrice: s.unitPrice,
        quantity: s.quantity,
      })),
    ];
  return (
    <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-center gap-1 sm:gap-4">
      <div className="flex items-center w-full  justify-between py-3 first:pt-0 last:pb-0">
        <div>
          <p className="text-xs text-muted-foreground">Main Meal</p>
          <p className="text-gray-800 text-sm sm:text-base">
            {item.menuItem.name}{" "}
            {item.quantity > 1 && (
              <span className="text-[10px] sm:text-xs text-gray-600">
                x{item.quantity}
              </span>
            )}
          </p>
        </div>
        <p className="font-medium text-gray-700">
          {formatCurrency(Number(item.unitPrice) * item.quantity)}
        </p>
      </div>
      <Separator orientation="vertical" className="hidden sm:inline-block" />
      <Separator orientation="horizontal" className="sm:hidden inline-block" />

      <div className="w-full">
        {extras.length > 0 ? (
          <div className="py-3 ">
            <p className="text-xs text-muted-foreground text-left">Extras</p>
            <div className="flex items-center justify-between first:pt-0  last:pb-0">
              <div className="flex flex-col w-full items-center">
                {extrasAndTheirPricesAndQuantity.map((e) => (
                  <div
                    className="flex justify-between items-center w-full"
                    key={e.id}
                  >
                    <p className="text-gray-800 text-sm sm:text-base">
                      {e.name}{" "}
                      {e.quantity > 1 && (
                        <span className="text-[10px] sm:text-xs text-gray-600">
                          x{e.quantity}
                        </span>
                      )}
                    </p>
                    <p className="font-medium text-gray-700">
                      {formatCurrency(Number(e.unitPrice) * e.quantity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground text-xs sm:text-sm">No extras</p>
        )}
      </div>
    </div>
  );
}
