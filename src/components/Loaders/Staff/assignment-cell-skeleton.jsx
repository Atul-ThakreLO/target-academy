import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const AssignmentCellSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="text-center">
        <Checkbox />
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <p class="bg-muted p-2 mt-1 w-28"></p>
      </TableCell>
      <TableCell className="text-center">
        <div class="bg-muted p-2 h-10 w-20"></div>
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
        <div class="mx-auto">
          <span class="inline-block p-2 border rounded-md bg-muted h-6 w-8"></span>
          <span class="inline-block p-2 border rounded-md bg-muted h-6 w-8"></span>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AssignmentCellSkeleton;
