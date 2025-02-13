import React from "react";
import { Skeleton } from "../ui/skeleton";

const StudentSkelleton = () => {
  return (
    <div className="flex space-y-4 overflow-hidden">
      <div className="animate-pulse w-[20%] h-[100vh] flex flex-col justify-between">
        <div>
          <div className="h-20 bg-gray-200 rounded w-full my-4"></div>

          <div className="h-px bg-gray-200 my-4"></div>
        </div>

        <div className="space-y-4 self-start">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="h-px bg-gray-200"></div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div>
          <div className="h-px bg-gray-200 my-4"></div>

          <div className="h-20 bg-gray-200 rounded w-full my-4"></div>
        </div>
      </div>
      <div className="w-[80%] h-[95vh] animate-pulse">
        <section className="p-8">
          <div className="border rounded-lg shadow-lg py-4">
            <div className="my-5 bg-gray-200 rounded h-20"></div>
            <div className="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section className="p-8">
          <div className="border rounded-lg shadow-lg py-4">
            <div className="my-5 bg-gray-200 rounded h-20"></div>
            <div className="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section className="p-8">
          <div className="border rounded-lg shadow-lg py-4">
            <div className="my-5 bg-gray-200 rounded h-20"></div>
            <div className="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section className="p-8">
          <div className="border rounded-lg shadow-lg py-4">
            <div className="my-5 bg-gray-200 rounded h-20"></div>
            <div className="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentSkelleton;
