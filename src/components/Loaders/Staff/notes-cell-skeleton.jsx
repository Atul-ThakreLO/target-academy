import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const NotesCellSkeleton = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">
              <Checkbox />
            </TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Subject</TableHead>
            <TableHead className="text-center">Class</TableHead>
            <TableHead className="text-center">Posted-by</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }, (_, i) => (
            <TableRow key={i}>
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NotesCellSkeleton;
