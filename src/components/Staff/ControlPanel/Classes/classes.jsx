import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import ClassCard from "./class-card";

const Classes = () => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Classes
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
        {add ? (
          <Button
            variant="outline"
            onClick={() => setAdd((prev) => !prev)}
            className="border-red-500 text-red-500"
          >
            <Minus /> Cancel
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        )}
      </div>
      <div
        className={`flex justify-between items-center ${
          add ? "h-24" : "h-0"
        } duration-300 overflow-hidden border-b mt-5 px-2`}
      >
        <div className="">
          <Label className="text-end">Class</Label>
          <Input
            type="text"
            name="school"
            className="w-56"
            placeholder={"Enter Class Name"}
          />
        </div>
        <div>
          <Button onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 mx-auto mt-10">
        <ClassCard name={"8th"} />
        <ClassCard name={"9th"} />
        <ClassCard name={"10th"} />
        <ClassCard name={"11th"} />
        <ClassCard name={"12th"} />
      </div>
    </>
  );
};

export default Classes;
