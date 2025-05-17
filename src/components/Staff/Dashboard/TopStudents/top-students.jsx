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
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">12th</span>
            {!data ? (
              <span className="inline-block w-20 h-6 bg-muted"></span>
            ) : (
              <span className="text-lg text-nowrap">{data?.topper12th?.student_name}</span>
            )}
          </div>
          {!data ? (
            <span className="inline-block w-6 h-6 bg-muted mx-auto mt-2"></span>
          ) : (
            <p className="text-center">({data?.topper12th?.totalMarks})</p>
          )}
        </div>

        <div>
          <Separator orientation="vertical" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">10th</span>
            {!data ? (
              <span className="inline-block w-20 h-6 bg-muted"></span>
            ) : (
              <span className="text-lg text-nowrap">{data?.topper10th?.student_name}</span>
            )}
          </div>
          {!data ? (
            <span className="inline-block w-6 h-6 bg-muted mx-auto mt-2"></span>
          ) : (
            <p className="text-center">({data?.topper10th?.totalMarks})</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopStudents;
