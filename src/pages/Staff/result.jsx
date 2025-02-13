import ResultTable from "@/components/Staff/Result/result-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Result = () => {
  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Results
        </h6>
        {/* <p className="text-gray-500 mt-3">Add or Provide Notes</p> */}
      </div>
      <div className="flex justify-around items-center mt-5">
        <div>
          <Label>Class</Label>
          <Input />
        </div>
        <div>
          <Label>Session</Label>
          <Input />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </div>
      <div className="mt-5">
        <Input className="w-3/12 border-2" />
      </div>
      <div className="border rounded-xl mt-5">
        <ResultTable />
      </div>
    </div>
  );
};

export default Result;
