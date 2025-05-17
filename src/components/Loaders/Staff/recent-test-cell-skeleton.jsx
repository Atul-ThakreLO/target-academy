import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const RecentTestCellSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <div className="w-32 h-6 bg-muted rounded-md"></div>
      </TableCell>
      <TableCell>
        <div className="w-32 h-6 bg-muted rounded-md"></div>
      </TableCell>
      <TableCell>
        <div className="w-32 h-6 bg-muted rounded-md"></div>
      </TableCell>
    </TableRow>
  );
};

export default RecentTestCellSkeleton;
