import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubjectCards from "./subject-cards";

const Subjects = () => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Subjects
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
          <Label className="text-end">Subject Name</Label>
          <Input
            type="text"
            name="subject"
            className="w-56"
            placeholder={"Enter Subject Name"}
          />
        </div>
        <div>
          <Label>Class</Label>
          <Select>
            <SelectTrigger className="w-56 mt-2">
              <SelectValue placeholder="Select a Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Class</SelectLabel>
                <SelectItem value="8th">8th</SelectItem>
                <SelectItem value="9th">9th</SelectItem>
                <SelectItem value="10th">10th</SelectItem>
                <SelectItem value="11th">11th</SelectItem>
                <SelectItem value="12th">12th</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-5 mt-5">
        <SubjectCards name={"8th"} subjects={["Maths", "Science", "English"]} />
        <SubjectCards name={"9th"} subjects={["Maths", "Science", "English"]} />
        <SubjectCards name={"10th"} subjects={["Maths", "Science", "English"]} />
        <SubjectCards name={"11th-12th"} subjects={["Maths", "Chemistry", "Physics", "Biology"]} />
      </div>
    </>
  );
};

export default Subjects;
