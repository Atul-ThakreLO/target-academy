import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const RecentAssignmentSkeleton = () => {
  return (
    <TableRow class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
      <TableCell>
        <div className="w-24 h-6 bg-muted"></div>
      </TableCell>
      <TableCell>
        <div className="w-10 h-6 bg-muted"></div>
      </TableCell>
      <TableCell>
        <div className="w-10 h-6 bg-muted"></div>
      </TableCell>
      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
        <div class="relative w-min mx-auto">
          <svg width="60" height="60" viewBox="0 0 120 120">
            <circle
              r="50"
              cx="60"
              cy="60"
              class="stroke-gray-300"
              stroke-width="13"
              fill="none"
            ></circle>
            <circle
              r="50"
              cx="60"
              cy="60"
              class="stroke-muted"
              stroke-width="13"
              fill="none"
              stroke-dasharray="100"
              stroke-dashoffset="0"
              pathLength="99.5"
            ></circle>
          </svg>
          <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted p-2">
            
          </p>
        </div>
      </td>
    </TableRow>
  );
};

export default RecentAssignmentSkeleton;
