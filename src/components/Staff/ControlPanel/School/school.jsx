import React, { useState } from "react";
import SchoolCard from "./school-card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const School = () => {
  const schools = [
    "Ashok Vidyalaya",
    "Jivan Vikas",
    "Sanskar",
    "Nutan College",
  ];
  const schoolsArray = [
    "/School/school-1.png",
    "/School/school-2.png",
    "/School/school-3.png",
    "/School/school-4.png",
  ];

  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Schools
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
          <Label className="text-end">School Name</Label>
          <Input
            type="text"
            name="school"
            className="w-56"
            placeholder={"Enter School Name"}
          />
        </div>
        <div>
          <Button onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            name={school}
            img={schoolsArray[Math.floor(Math.random() * 4)]}
          />
        ))}
      </div>
    </>
  );
};

export default School;
