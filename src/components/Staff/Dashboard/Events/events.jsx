import { useSidebar } from "@/components/ui/sidebar";
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
  const {open} = useSidebar()
  return (
    <div className="border rounded-xl p-4 h-full">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Upcoming Events</p>
        <TransitionLink href={"/staff/assignments"}>
          <Link size={18} />
        </TransitionLink>
      </div>
      <div className="mt-5 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
        {/* <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-max"
          />
        </div> */}
        <div className={`mt-3 overflow-y-auto w-[calc(99vw-2rem)] ${
          open ? "md:w-[calc(99vw-var(--sidebar-width)-4rem)] lg:w-[calc(62vw-var(--sidebar-width))]" : "md:w-[calc(100vw-var(--sidebar-width-icon)-6rem)] lg:w-[calc(57vw-var(--sidebar-width-icon)-1.3rem)]"
        }`}>
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
