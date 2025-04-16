import AddAssignments from "@/components/Staff/Assignments/Add-Assignments/add-assignments";
import Assignments from "@/components/Staff/Assignments/Assignments";
import AssignmentTable from "@/components/Staff/Assignments/Table/assignment-table";
import { Button } from "@/components/ui/button";
import { useGetAssignments } from "@/Hooks/use-assignment";
import { setAssignmentData } from "@/Redux/slices/secondary/assignment/assignment-data-slice";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AssignmentsStaff = () => {
  const [add, setAdd] = useState(false);


  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Assignments
        </h6>
        <p className="text-gray-500 mt-3">Add or View Assignments</p>
      </div>

      <div className="flex justify-end items-center mb-5                                    ">
        <Button
          variant="outline"
          type="button"
          className={`${add ? "border-red-500 text-red-500" : ""}`}
          onClick={() => setAdd((prev) => !prev)}
        >
          {add ? (
            <>
              Cancel
              <Minus />
            </>
          ) : (
            <>
              <Plus /> Add New
            </>
          )}
        </Button>
      </div>
      <div
        className={`${
          add ? "h-full duration-500" : "h-0 duration-300"
        } overflow-hidden border-b`}
      >
        <AddAssignments />
      </div>
      {/* <Assignments /> */}
      <AssignmentTable />
    </div>
  );
};

export default AssignmentsStaff;
