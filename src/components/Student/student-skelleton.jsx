import React from "react";
import { Skeleton } from "../ui/skeleton";

const StudentSkelleton = () => {
  return (
    <div className="flex space-y-4 overflow-hidden">
      <div class="animate-pulse w-[20%] h-[100vh] flex flex-col justify-between">
        <div>
          <div class="h-20 bg-gray-200 rounded w-full my-4"></div>

          <div class="h-px bg-gray-200 my-4"></div>
        </div>

        <div class="space-y-4 self-start">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gray-200 rounded"></div>
            <div class="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div class="h-px bg-gray-200"></div>
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gray-200 rounded"></div>
            <div class="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div class="h-px bg-gray-200"></div>
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gray-200 rounded"></div>
            <div class="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
          <div class="h-px bg-gray-200"></div>
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gray-200 rounded"></div>
            <div class="w-24 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div>
          <div class="h-px bg-gray-200 my-4"></div>

          <div class="h-20 bg-gray-200 rounded w-full my-4"></div>
        </div>
      </div>
      <div class="w-[80%] h-[95vh] animate-pulse">
        <section class="p-8">
          <div class="border rounded-lg shadow-lg py-4">
            <div class="my-5 bg-gray-200 rounded h-20"></div>
            <div class="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section class="p-8">
          <div class="border rounded-lg shadow-lg py-4">
            <div class="my-5 bg-gray-200 rounded h-20"></div>
            <div class="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section class="p-8">
          <div class="border rounded-lg shadow-lg py-4">
            <div class="my-5 bg-gray-200 rounded h-20"></div>
            <div class="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
        <section class="p-8">
          <div class="border rounded-lg shadow-lg py-4">
            <div class="my-5 bg-gray-200 rounded h-20"></div>
            <div class="bg-gray-200 rounded h-40"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentSkelleton;
