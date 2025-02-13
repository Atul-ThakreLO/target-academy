import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import React from "react";

const TransactionList = () => {
  return (
    <div>
      <div className="relative mt-10">
        <Input type="search" className="w-96 pl-12 border-2" />
        <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="border rounded-xl overflow-hidden mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>asdhgqaw352twqwvdeq26e</TableCell>
              <TableCell>Name of </TableCell>
              <TableCell>12-02-2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>asdhgqaw352twqwvdeq26e</TableCell>
              <TableCell>Name of </TableCell>
              <TableCell>12-02-2025</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>asdhgqaw352twqwvdeq26e</TableCell>
              <TableCell>Name of </TableCell>
              <TableCell>12-02-2025</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionList;
