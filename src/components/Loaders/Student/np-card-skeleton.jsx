import React from "react";

const NPCardSkeleton = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-lg cursor-pointer animate-pulse">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center justify-between">
          <div className="h-7 w-7 bg-muted"></div>
          <p className="text-sm font-light text-gray-500 tracking-wider h-4 w-16 bg-muted"></p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="h-16 w-12 bg-muted rounded-md"></div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="mx-auto h-7 w-24 bg-muted"></div>
      </div>
    </div>
  );
};

export default NPCardSkeleton;
