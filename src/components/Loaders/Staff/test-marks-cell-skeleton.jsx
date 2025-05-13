import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const TestMarksCellSkeleton = () => {
  return (
    <TableRow>
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
        <Button variant="outline" className="w-10"></Button>
      </TableCell>
    </TableRow>
  );
};

export default TestMarksCellSkeleton;
