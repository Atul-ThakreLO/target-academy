import FilterStudent from "@/components/Staff/Students/filter-student";
import StudentsTable from "@/components/Staff/Students/students-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";
import React from "react";

const Students = () => {
  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Students
        </h6>
        <p className="text-gray-500 mt-3">View Students</p>
      </div>
      <div className="mt-10 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input type="search" className="w-96 pl-12 border-2" />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" type="button">
              <Filter size={18} />
              <span className="">Filter Students</span>
            </Button>
          </DialogTrigger>
          <FilterStudent />
        </Dialog>

        {/* <div className="flex gap-2 items-center border rounded-lg px-3 py-1">
          <Filter size={18} />
          <span className="">Filter Students</span>
        </div> */}
      </div>
      <div className="border rounded-xl">
        <StudentsTable />
      </div>
    </div>
  );
};

export default Students;
