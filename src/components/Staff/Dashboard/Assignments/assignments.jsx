import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProgressBar from "./progress-bar";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Link } from "lucide-react";
import React from "react";

const Assignments = () => {
  return (
    <div className="border rounded-xl p-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Recent Assignments</p>
        <TransitionLink href={"/staff/assignments"}>
          <Link size={18} />
        </TransitionLink>
      </div>
      <div className="mt-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Assignments</TableHead>
              <TableHead className="text-center">Completed By</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell >Assignment-1</TableCell>
              <TableCell className="text-center">43</TableCell>
              <TableCell className="text-center">80</TableCell>
              <TableCell><ProgressBar prog={100}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Assignment-1</TableCell>
              <TableCell className="text-center">43</TableCell>
              <TableCell className="text-center">80</TableCell>
              <TableCell><ProgressBar prog={99}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell >Assignment-1</TableCell>
              <TableCell className="text-center">43</TableCell>
              <TableCell className="text-center">80</TableCell>
              <TableCell><ProgressBar prog={1}/></TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </div>
    </div>
  );
};

export default Assignments;
