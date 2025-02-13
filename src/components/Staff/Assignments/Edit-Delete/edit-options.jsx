import { Button } from "@/components/ui/button";
import {
  DialogContent,
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
import { Edit } from "lucide-react";
import React from "react";

const EditOptions = ({ id }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Edit /> <span>Edit ID: {id}</span>
        </DialogTitle>
      </DialogHeader>
      <div>
        <div>
          <Label>Class</Label>
          <Select>
            <SelectTrigger className="w-full mt-2">
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
          <Label>Subjects</Label>
          <Select>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select a Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>subject</SelectLabel>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Maths">Maths</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Batch</Label>
          <Select>
            <SelectTrigger className="w-60 mt-2">
              <SelectValue placeholder="Select a Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Batch-1">Batch-1 </SelectItem>
              <SelectItem value="Batch-2">Batch-2 </SelectItem>
              <SelectItem value="Batch-3">Batch-3 </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button>Apply Changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditOptions;
