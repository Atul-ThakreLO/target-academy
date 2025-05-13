import Chart from "@/components/Student/Marks/Chart";
import MarksTable from "@/components/Student/Marks/Marks-table";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetMarksForStudent } from "@/Hooks/use-marks";
import { Loader2 } from "lucide-react";

const Marks = () => {
  const { data, isLoading, isFetched } = useGetMarksForStudent();
  return (
    <ScrollArea className="h-[95vh]">
      <>
        <MarksTable data={data?.data} isLoading={isLoading} />
        <h5 className="text-4xl mt-20  font-medium">
          Graphical Representation
        </h5>
        <Chart />
      </>
    </ScrollArea>
  );
};

export default Marks;
