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
import { Link, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGetRecentAssignments } from "@/Hooks/use-assignment";
import RecentAssignmentSkeleton from "@/components/Loaders/Staff/recent-assignment-skeleton";

const Assignments = () => {
  const { data, isLoading } = useGetRecentAssignments(5);
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data.data);
  //   }
  // }, [data, isLoading, isSuccess]);
  // useEffect(() =)

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
            {isLoading
              ? Array.from({ length: 4 }, (_, i) => (
                  <RecentAssignmentSkeleton key={i} />
                ))
              : data?.data?.map((assi) => (
                  <TableRow>
                    <TableCell className="text-nowrap">{assi?.title}</TableCell>
                    <TableCell className="text-center">
                      {assi?._count?.completedAssignment}
                    </TableCell>
                    <TableCell className="text-center">
                      {assi?.batch?._count?.students}
                    </TableCell>
                    <TableCell>
                      <ProgressBar
                        prog={
                          ((assi?._count?.completedAssignment /
                            assi?.batch?._count?.students) *
                          100).toFixed(0)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Assignments;
