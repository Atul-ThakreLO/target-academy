import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import JobAppliedCard from "./job-applied-card";

const JobSheet = () => {
  return (
    <SheetContent className="min-w-[37vw]">
      <SheetHeader>
        <SheetTitle>Job Applications</SheetTitle>
        <SheetDescription>
          <p>
            <b>Job Title: </b> Job Name
          </p>
          <p>
            <b>Job ID: </b> 12412eqwsdeqasdhbjky42u34
          </p>
        </SheetDescription>
      </SheetHeader>
      <div className="mt-5">
        <JobAppliedCard />
      </div>
      {/* <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter> */}
    </SheetContent>
  );
};

export default JobSheet;
