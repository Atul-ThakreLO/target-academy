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
import { useGetRecentTestPapers } from "@/Hooks/use-test-paper";
import { Link, Loader2 } from "lucide-react";
import React, { useEffect } from "react";

const Tests = () => {
  const { data, isLoading, isSuccess } = useGetRecentTestPapers();
  const { open } = useSidebar();
  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data.data);
  //   }
  // }, [data, isLoading, isSuccess]);
  return (
    <div className="border rounded-xl p-2 py-4 md:p-4 h-full">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Recent Tests</p>
        <TransitionLink href={"/staff/assignments"}>
          <Link size={18} />
        </TransitionLink>
      </div>
      <div
        className={`mt-3 overflow-y-auto w-[calc(99vw-2rem)] ${
          open ? "md:w-[calc(99vw-var(--sidebar-width)-4rem)] lg:w-[calc(62vw-var(--sidebar-width))]" : "md:w-[calc(100vw-var(--sidebar-width-icon)-6rem)] lg:w-[calc(57vw-var(--sidebar-width-icon)-1.3rem)]"
        }`}
      >
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
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              data?.data.map((testP) => (
                <TableRow>
                  <TableCell className="text-center border-r">
                    {testP.title}
                  </TableCell>
                  <TableCell className="text-center border-r">4234</TableCell>
                  <TableCell className="text-center">
                    {testP?.TestPaperStudents[0]
                      ? `${testP?.TestPaperStudents[0]?.student?.StudentInfo?.student_name} -- (${testP?.TestPaperStudents[0]?.marks})`
                      : "Not Posted Yet"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Tests;
