import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const StaffCellSkeleton = () => {
  return (
    <TableRow className="animate-pulse">
      <TableCell className="text-center">
        <div class="flex gap-2 items-center">
          <span class="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 bg-muted"></span>
          <div>
            <p class="text-xl font-semibold w-20 bg-muted p-3"></p>
            <p class="w-20 bg-muted p-2 mt-1"></p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <div class="w-min mx-auto">
          <span class="inline-block p-3 bg-blue-400/40 rounded-sm mt-1 w-28"></span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div class="w-min mx-auto">
          <span class="inline-block p-2 border rounded-full bg-red-500/50 mr-2 w-12"></span>
          <span class="inline-block p-2 border rounded-full bg-green-500/50 w-12"></span>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default StaffCellSkeleton;
