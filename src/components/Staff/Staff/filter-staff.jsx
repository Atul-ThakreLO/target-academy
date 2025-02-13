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

const FilterStaff = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
        <DialogDescription>
          Apply Filter to get specific Staff
        </DialogDescription>
      </DialogHeader>
      <div>
        <div>
          <Label>Role</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Role</SelectLabel>
                <SelectItem value="Teacher">Teacher</SelectItem>
                <SelectItem value="Management">Management</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Verify Status</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="Verified">Verified</SelectItem>
                <SelectItem value="Unverified">Unverified</SelectItem>
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

export default FilterStaff;
