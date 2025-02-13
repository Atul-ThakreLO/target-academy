import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import BatchCard from "./batch-card";
import BatchCarousel from "./batch-carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Batches = () => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Batches
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
      {/* <div className="mt-10">
        <div className="mt-10">
          <h6 className="text-2xl font-semibold">8th Btaches :</h6>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mx-auto mt-5">
            <BatchCard />
          </div>
        </div>
        <div className="mt-10">
          <h6 className="text-2xl font-semibold">9th Btaches :</h6>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mx-auto mt-5">
            <BatchCard />
            <BatchCard />
          </div>
        </div>
        <div className="mt-10">
          <h6 className="text-2xl font-semibold">10th Btaches :</h6>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mx-auto mt-5">
            <BatchCard />
            <BatchCard />
          </div>
        </div>
        <div className="mt-10">
          <h6 className="text-2xl font-semibold">11th-12th Btaches :</h6>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-6 mx-auto mt-5">
            <BatchCard />
            <BatchCard />
            <BatchCard />
          </div>
        </div>
      </div> */}
      <BatchCarousel />
    </>
  );
};

export default Batches;
