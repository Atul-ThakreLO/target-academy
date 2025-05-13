import { Separator } from "@/components/ui/separator";
import { Dot, User } from "lucide-react";
import React from "react";

const ExpertFaculty = () => {
  return (
    <div className="h-full">
      <div className="rounded-3xl border h-full">
        <div className="px-3 py-1">
          <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
          <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mx-1"></span>
        </div>
        <Separator />
        {/* <div className="grid grid-cols-4 grid-rows-3 justify-center items-center w-[80%] mx-auto py-4">
           <User /> 
           <User /> 
           <User /> 
           <User /> 
           <User /> 
        </div> */}
        <div className="flex gap-4 justify-center items-center mx-auto py-4">
          {/* <div className="p-6 relative rounded-lg overflow-hidden">
            <div className="absolute bg-muted rounded-full top-1/4 left-1/4 h-1/2 w-1/2 animate-ping duration-1000"></div>
            <User />
          </div> */}
          <div className="p-6 bg-muted rounded-md animate-pulse">
            <User />
          </div>
          <div className="p-6 bg-muted rounded-md animate-pulse">
            <User />
          </div>
          <div className="p-6 bg-muted rounded-md animate-pulse">
            <User />
          </div>
          <div className="p-6 bg-muted rounded-md animate-pulse">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertFaculty;
