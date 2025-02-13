import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import React from "react";

const FilterStudent = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
        <DialogDescription>
          Apply Filter to get specific students
        </DialogDescription>
      </DialogHeader>
      <div>
        <div>
          <Label>Class</Label>
          <Select>
            <SelectTrigger className="w-full">
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
        <div>
          <Label>School</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a School" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>School</SelectLabel>
                <SelectItem value="Ashok Vidylaya">Ashok Vidylaya</SelectItem>
                <SelectItem value="Jivan Vikas Vidyalaya">
                  Jivan Vikas Vidyalaya
                </SelectItem>
                <SelectItem value="Sanskar">Sanskar</SelectItem>
                <SelectItem value="Nutan college">Nutan college</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Apply Filter</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default FilterStudent;
