import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const AssignmentRowSkeleton = () => {
  return (
    <TableRow className="animate-pulse">
      <TableCell>
        <div className="w-20 h-5 bg-background mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-8 h-8 bg-background mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-16 h-5 bg-background mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-20 h-5 bg-background mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-20 h-5 bg-background mx-auto"></div>
      </TableCell>
      <TableCell className="flex justify-end items-center gap-4">
        <div className="w-20 h-5 bg-background"></div>
        <div className="w-20 h-8 bg-background"></div>
        <div className="w-20 h-8 bg-background"></div>
      </TableCell>
    </TableRow>
  );
};

export default AssignmentRowSkeleton;
