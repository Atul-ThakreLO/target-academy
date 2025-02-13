import AddNotesPapers from "@/components/Staff/Notes-Papers-Utils/add-note-papers";
import AddPapers from "@/components/Staff/Papers/Add-Papers/add-papers";
import PapersTable from "@/components/Staff/Papers/Papers-Table/papers-table";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const PapersStaff = () => {
  const [add, setAdd] = useState(false);
  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">Papers</h6>
        <p className="text-gray-500 mt-3">Add or Papers</p>
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
          add ? "h-96 duration-500" : "h-0 duration-300"
        } overflow-hidden border-b`}
      >
        {/* <AddPapers /> */}
        <AddNotesPapers type={"papers"} />
      </div>
      <PapersTable />
    </div>
  );
};

export default PapersStaff;
