import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Link } from "lucide-react";
import React from "react";

const Tests = () => {
  return (
    <div className="border rounded-xl p-4 h-full">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Recent Tests</p>
        <TransitionLink href={"/staff/assignments"}>
          <Link size={18} />
        </TransitionLink>
      </div>
      <div className="mt-3">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-center">
              <TableHead className="text-center border-r">
                Description
              </TableHead>
              <TableHead className="text-center border-r">Posted By</TableHead>
              <TableHead className="text-center">Topper</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center border-r">asdcfasz</TableCell>
              <TableCell className="text-center border-r">4234</TableCell>
              <TableCell className="text-center">23erdw</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border-r">asdcfasz</TableCell>
              <TableCell className="text-center border-r">4234</TableCell>
              <TableCell className="text-center">23erdw</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border-r">asdcfasz</TableCell>
              <TableCell className="text-center border-r">4234</TableCell>
              <TableCell className="text-center">23erdw</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center border-r">asdcfasz</TableCell>
              <TableCell className="text-center border-r">4234</TableCell>
              <TableCell className="text-center">23erdw</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tests;
