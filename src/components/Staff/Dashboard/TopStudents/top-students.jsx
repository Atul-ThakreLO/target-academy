import { Separator } from "@/components/ui/separator";
import React from "react";

const TopStudents = ({ data }) => {
  return (
    <div className="border rounded-xl flex col-span-2">
      <div className="flex gap-3 justify-center items-center border-r h-full p-4">
        <img src={"/trophy-1.svg"} alt="trophy" className="h-10 w-10" />
        <span className="text-2xl font-semibold">Top Students</span>
      </div>
      <div className="flex p-4 gap-3">
        <div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">12th</span>
            <span className="text-lg ">{data?.topper12th.student_name}</span>
          </div>
          <p className="text-center">({data?.topper12th.totalMarks})</p>
        </div>

        <div>
          <Separator orientation="vertical" />
        </div>
        <div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">10th</span>
            <span className="text-lg">{data?.topper10th.student_name}</span>
          </div>
          <p className="text-center">({data?.topper10th.totalMarks})</p>
        </div>
      </div>
    </div>
  );
};

export default TopStudents;
