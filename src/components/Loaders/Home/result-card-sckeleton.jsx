import React from "react";

const ResultCardSckeleton = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm animate-pulse">
      <div className="flex flex-col space-y-1.5 p-6 items-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 bg-muted"></span>
        <p className="font-medium text-center text-lg md:text-xl h-4 w-32 bg-muted"></p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>
      <div className="p-6 pt-0">
        <table className="w-full mt-2">
          {Array.from({ length: 4 }, (_, i) => (
            <tr className="">
              <td className="text-start text-sm h-4 w-32 bg-muted"></td>
              <td> : </td>
              <td className="h-4 w-32 bg-muted"></td>
            </tr>
          ))}
        </table>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      ></div>
      <div className="flex items-center p-6 pt-0">
        <div className="flex items-center w-full justify-between mt-5">
          <p className="font-semibold text-lg h-6 w-32 bg-muted mx-2"></p>
          <p className="font-semibold text-lg h-6 w-32 bg-muted"></p>
        </div>
      </div>
    </div>
  );
};

export default ResultCardSckeleton;
