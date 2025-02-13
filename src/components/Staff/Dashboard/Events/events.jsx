import { Calendar } from "@/components/ui/calendar";
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
import React, { useState } from "react";

const Events = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="border rounded-xl p-4 h-full">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Upcoming Events</p>
        <TransitionLink href={"/staff/assignments"}>
          <Link size={18} />
        </TransitionLink>
      </div>
      <div className="mt-5 flex gap-4">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-max"
          />
        </div>
        <div className="w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="text-center">
                <TableHead className="text-center border-r">
                  Description
                </TableHead>
                <TableHead className="text-center border-r">
                  Date <span>(YYYY-MM-DD)</span>
                </TableHead>
                <TableHead className="text-center">
                  Time <span>(24 hrs)</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center border-r">asdcfasz</TableCell>
                <TableCell className="text-center border-r">4234</TableCell>
                <TableCell className="text-center">23erdw</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Events;
