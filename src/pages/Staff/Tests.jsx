import AddTest from "@/components/Staff/Tests/Add-Test/add-test";
import TestList from "@/components/Staff/Tests/Table/test-list";
import React from "react";

const Tests = () => {
  return (
    <>
      <div>
        <div className="mt-5 pl-5">
          <h6 className="text-4xl font-semibold gradient-title-custom">
            Test Papers
          </h6>
          <p className="text-gray-500 mt-3">Add Test and Marks</p>
        </div>
        <AddTest />
      </div>
      <div>
        <TestList />
      </div>
    </>
  );
};

export default Tests;
