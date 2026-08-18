"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { MenuItem } from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import MenuItemsFilter from "./MenuItemsFilter";
type SerializedMenuItem = Omit<MenuItem, "price"> & { price: number };

type Props = {
  menuItems: SerializedMenuItem[];
};
function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

function MenuItemsTable({ menuItems }: Props) {
  return (
    <div>
      <MenuItemsFilter />
      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-60">Meal</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden sm:table-cell">Price</TableHead>
              <TableHead className="hidden sm:table-cell"> </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Added</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuItems.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-12 text-gray-400"
                >
                  No menu items found
                </TableCell>
              </TableRow>
            ) : (
              menuItems.map((item) => {
                const price = Number(item.price);
                const discountedPrice = item.discount
                  ? price - price * (item.discount / 100)
                  : null;

                return (
                  <TableRow key={item.id} className="hover:bg-gray-50/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 rounded-md">
                          <AvatarImage
                            src={item.image}
                            alt={item.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                            {item.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate max-w-[160px] hidden sm:inline">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {/* <div className="flex flex-wrap gap-1">
                        {item.category.slice(0, 2).map((c) => (
                          <span
                            key={c}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {menuCategoryLabels[c as MenuCategory]}
                          </span>
                        ))}
                        {item.category.length > 2 && (
                          <span className="text-xs text-gray-400">
                            +{item.category.length - 2}
                          </span>
                        )}
                      </div> */}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {discountedPrice ? (
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {formatPrice(discountedPrice)}
                          </p>
                          <p className="text-xs text-gray-400 line-through">
                            {formatPrice(price)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-700">
                          {formatPrice(price)}
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {item.addProteinOptions && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            Protein
                          </span>
                        )}
                        {item.addCarbohydrateOptions && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            Carb
                          </span>
                        )}
                        {item.addSides && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            Sides
                          </span>
                        )}
                        {!item.addProteinOptions &&
                          !item.addCarbohydrateOptions &&
                          !item.addSides && (
                            <span className="text-xs text-gray-400">—</span>
                          )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs capitalize ${
                          item.isAvailable
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-gray-100 text-gray-600 border-gray-200"
                        }`}
                      >
                        {item.isAvailable ? "Available" : "Unavailable"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-sm text-gray-500">
                      {formatDistanceToNow(new Date(item.createdAt), {
                        addSuffix: true,
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="link"
                        asChild
                        className="text-muted-foreground hover:text-black transition duration-300"
                        size="sm"
                      >
                        <Link href={`/vendor/manage-menu/${item.id}`}>
                          Actions <ArrowUpRightIcon />
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default MenuItemsTable;
