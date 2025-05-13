import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const ResultCellSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <Checkbox />
      </TableCell>
      <TableCell>
        <div className="bg-muted w-full h-8"></div>
      </TableCell>
      <TableCell>
        <div className="bg-muted w-full h-8"></div>
      </TableCell>
      <TableCell>
        <div className="bg-muted w-full h-8"></div>
      </TableCell>
      <TableCell>
        <Button variant="outline" className="w-20"></Button>
      </TableCell>
    </TableRow>
  );
};

export default ResultCellSkeleton;
