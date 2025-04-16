import AssignmentsList from "@/components/Student/Assignments/assignments-list";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Assignments = () => {
  return (
    <ScrollArea className="h-[95vh]">
      <section className="p-4">
        <div className="mt-5 pl-5">
          <h6 className="text-4xl font-semibold gradient-title-custom">
            Assignments
          </h6>
          <p className="text-gray-500 mt-3">
            Complete your assignments and Upload it View
          </p>
        </div>
        <div>
          <AssignmentsList />
        </div>
      </section>
    </ScrollArea>
  );
};

export default Assignments;
