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
import VendorApplicationsFilter from "./VendorApplicationsFilter";
import { Vendor, VendorStatus } from "@/generated/prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const statusStyles: Record<VendorStatus, string> = {
  PENDING: "bg-amber-50 text-amber-700 border-amber-200",
  ACTIVE: "bg-green-50 text-green-700 border-green-200",
  REJECTED: "bg-red-50 text-red-700 border-red-200",
  SUSPENDED: "bg-gray-100 text-gray-600 border-gray-200",
};

type Props = {
  vendors: SerializedVendors[];
};
export type SerializedVendors = Omit<Vendor, "minimumPrice"> & {
  minimumPrice: number | null;
};

function VendorApplicationsTable({ vendors }: Props) {
  return (
    <div>
      <VendorApplicationsFilter />
      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-60">Vendor</TableHead>
              <TableHead className="hidden sm:table-cell">Cuisine</TableHead>
              <TableHead className="hidden sm:table-cell">Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Applied</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendors.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-12 text-gray-400"
                >
                  No applications found
                </TableCell>
              </TableRow>
            ) : (
              vendors.map((vendor) => (
                <TableRow key={vendor.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 rounded-md">
                        <AvatarImage
                          src={vendor.logo}
                          alt={vendor.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                          {vendor.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {vendor.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate max-w-[160px]">
                          {vendor.address}
                          {vendor.address}
                          {vendor.address}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {vendor.cuisineType.slice(0, 2).map((c) => (
                        <span
                          key={c}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                        >
                          {c}
                        </span>
                      ))}
                      {vendor.cuisineType.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{vendor.cuisineType.length - 2}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <p className="text-sm text-gray-700">{vendor.email}</p>
                    <p className="text-xs text-gray-400 truncate">
                      {vendor.phoneNumber}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`text-xs capitalize ${statusStyles[vendor.status]}`}
                    >
                      {vendor.status.toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-sm text-gray-500">
                    {formatDistanceToNow(new Date(vendor.createdAt), {
                      addSuffix: true,
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="link"
                      asChild
                      className="text-muted-foreground hover:text-black transition dura"
                      size="sm"
                    >
                      <Link href={`/admin/vendors/${vendor.slug}`}>
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

export default VendorApplicationsTable;
