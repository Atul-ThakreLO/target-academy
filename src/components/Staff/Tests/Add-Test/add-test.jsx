import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const AddTest = () => {
  const [add, setAdd] = useState(false);
  return (
    <div>
      <div className="flex justify-end items-center mb-5                                    ">
        <Button
          variant="outline"
          type="button"
          className={`${add ? "border-red-500 text-red-500" : ""}`}
          onClick={() => setAdd((prev) => !prev)}
        >
          {add ? (
            <>
              Cancel
              <Minus />
            </>
          ) : (
            <>
              <Plus /> Add New
            </>
          )}
        </Button>
      </div>
      <div
        className={`${
          add ? "h-36 duration-500" : "h-0 duration-300"
        } overflow-hidden border-b`}
      >
        <div className="mt-10 flex justify-between items-center px-12">
          <div className="">
            <Label htmlFor="filename">Test Title</Label>
            <Input
              className="w-full mt-2 border-2"
              placeholder="Enter a Test Title"
              id="title"
              name="title"
            />
          </div>
          <div>
            <Label>Subjcet</Label>
            <Select>
              <SelectTrigger className="w-60 mt-2">
                <SelectValue placeholder="Select a Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ashok Vidyalaya">Ashok Vidyalaya</SelectItem>
                <SelectItem value="Jivan Vikas Vidyalaya">
                  Jivan Vikas Vidyalaya
                </SelectItem>
                <SelectItem value="Sanskar">Sanskar</SelectItem>
                <SelectItem value="Nutan college">Nutan college</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Class</Label>
            <Select>
              <SelectTrigger className="w-60 mt-2">
                <SelectValue placeholder="Select a Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8th">8th</SelectItem>
                <SelectItem value="9th">9th</SelectItem>
                <SelectItem value="10th">10th</SelectItem>
                <SelectItem value="11th">11th</SelectItem>
                <SelectItem value="12th">12th</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Batch</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Batch</SelectLabel>
                  <SelectItem value="Batch-1">Batch-1</SelectItem>
                  <SelectItem value="Batch-2">Batch-2</SelectItem>
                  <SelectItem value="Batch-3">Batch-3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button>Add Test</Button>
        </div>
      </div>
    </div>
  );
};

export default AddTest;
