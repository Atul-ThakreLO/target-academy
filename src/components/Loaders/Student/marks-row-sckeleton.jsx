import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const MarksRowSckeleton = () => {
  return (
    <TableRow className="animate-pulse">
      <TableCell>
        <div className="w-28 h-5 bg-muted "></div>
      </TableCell>
      <TableCell>
        <div className="w-16 h-5 bg-muted "></div>
      </TableCell>
      <TableCell>
        <div className="w-8 h-8 bg-muted mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-20 h-5 bg-muted mx-auto"></div>
      </TableCell>
      <TableCell>
        <div className="w-20 h-5 bg-muted mx-auto"></div>
      </TableCell>
    </TableRow>
  );
};

export default MarksRowSckeleton;
