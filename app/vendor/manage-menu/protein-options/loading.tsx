import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ManageProteinOptionsLoading() {
  const skeletonRows = Array.from({ length: 6 });

  return (
    <div>
      <Skeleton className="h-3 w-40 mb-3 sm:hidden" />
      <div className="flex w-full justify-end mb-5">
        <Skeleton className="h-9 w-40" />
      </div>
      <Skeleton className="h-6 w-48 mb-6" />

      <div className="flex flex-col gap-4 mb-4">
        <Skeleton className="h-9 w-full" />
        <div className="hidden sm:flex flex-wrap gap-2">
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 overflow-hidden mt-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="w-60">Protein Option</TableHead>
              <TableHead className="hidden sm:table-cell">Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Added</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skeletonRows.map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-20 rounded-full" />
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ManageProteinOptionsLoading;
