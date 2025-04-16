import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Filter, Loader, RefreshCcwDot } from "lucide-react";
import React, { useState } from "react";

const FilterStaff = ({ isRefetching, setFilterData }) => {
  const [role, setRole] = useState("");
  const [vStatus, setVStatus] = useState("");
  const handleSubmit = () => {
    const data = { role, isVerified: vStatus };
    const keys = Object.keys(data);
    keys.forEach((key) => {
      if (data[key] === "") delete data[key];
    });
    console.log(data);
    
    setFilterData(data);
  };
  const handleReset = () => {
    setRole("");
    setVStatus("");
    setFilterData("");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" type="button">
          <Filter size={18} />
          <span className="">Filter Staff</span>
        </Button>
      </DialogTrigger>
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
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value="TEACHER">Teacher</SelectItem>
                  <SelectItem value="MANAGEMENT">Management</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Verify Status</Label>
            <Select value={vStatus} onValueChange={setVStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value={true}>Verified</SelectItem>
                  <SelectItem value={false}>Unverified</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              disabled={isRefetching}
            >
              <RefreshCcwDot />
              Clear Filter
            </Button>
            <Button
              type="button"
              disabled={isRefetching}
              onClick={handleSubmit}
            >
              {isRefetching ? (
                <Loader className="animate-spin" />
              ) : (
                "Apply Filter"
              )}
            </Button>
          </DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterStaff;
