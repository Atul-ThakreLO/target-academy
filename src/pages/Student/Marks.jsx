import Chart from "@/components/Student/Marks/Chart";
import MarksTable from "@/components/Student/Marks/Marks-table";
import React, { useEffect } from "react";
import { ScrollBar, ScrollArea } from "@/components/ui/scroll-area";
import { useGetMarksForStudent } from "@/Hooks/use-marks";
import { Loader2 } from "lucide-react";

const Marks = () => {
  const { data, isLoading, isFetched } = useGetMarksForStudent();
  return (
    <ScrollArea className="h-[95vh]">
      {isLoading ? (
        <div className="w-full h-screen grid place-items-center">
          <Loader2 size={30} className="animate-spin" />
        </div>
      ) : (
        <>
          <MarksTable data={data?.data} />
          <h5 className="text-4xl mt-20  font-medium">Graphical Representation</h5>
          <Chart />
        </>
      )}
    </ScrollArea>
  );
};

export default Marks;
