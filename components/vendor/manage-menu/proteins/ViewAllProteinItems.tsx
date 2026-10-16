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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { ProteinOption } from "@/generated/prisma/client";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
export type serializedProteinOption = Omit<ProteinOption, "extraPrice"> & {
  extraPrice: number;
};
function ProteinOptionsTable({
  proteinOptions,
}: {
  proteinOptions: serializedProteinOption[];
}) {
  return (
    <div>
      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-60">Protein</TableHead>
              <TableHead className="hidden sm:table-cell">
                Extra Price
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {proteinOptions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center py-12 text-gray-400"
                >
                  No protein options found
                </TableCell>
              </TableRow>
            ) : (
              proteinOptions.map((protein) => (
                <TableRow key={protein.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={protein.image}
                        alt={protein.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <p className="font-medium text-sm text-gray-900">
                        {protein.name}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <p className="text-sm text-gray-700">
                      {protein.extraPrice > 0
                        ? `+${formatCurrency(protein.extraPrice)}`
                        : "Free"}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`text-xs capitalize ${
                        protein.isAvailable
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-gray-100 text-gray-600 border-gray-200"
                      }`}
                    >
                      {protein.isAvailable ? "Available" : "Unavailable"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="link"
                      asChild
                      className="text-muted-foreground hover:text-black transition duration-300"
                      size="sm"
                    >
                      <Link
                        href={`/vendor/manage-menu/protein-options/${protein.slug}`}
                      >
                        Actions <ArrowUpRightIcon />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProteinOptionsTable;
