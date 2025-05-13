import React from "react";

const HighestMarks = () => {
  return (
    <div className="p-4 border rounded-lg mt-5 flex gap-6 opacity-50">
      <div className="flex items-center justify-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">
          <span className="flex items-center justify-center w-full  rounded-full bg-muted">
            NP
          </span>
        </span>
      </div>
      <div className="w-full">
        <span className="text-4xl font-semibold">NP</span>
        <p className="text-lg">Not Provided</p>
      </div>
      <div className="flex justify-center items-center border-l pl-4">
        <img src="/trophy-1.svg" alt="trophy" className="h-16 w-16" />
      </div>
    </div>
  );
};

export default HighestMarks;
