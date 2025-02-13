import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const ProvideNotes = () => {
  return (
    <div className="px-12 mt-10 flex justify-between items-center">
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
        <Label>Notes</Label>
        <Select>
          <SelectTrigger className="w-60 mt-2">
            <SelectValue placeholder="Select a Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Note-qewqd1231sasde1">
              Note-qewqd1231sasde1
            </SelectItem>
            <SelectItem value="Note-qewqd1231sasd2e">
              Note-qewqd1231sasde2
            </SelectItem>
            <SelectItem value="Note-qewqd1231sa3sde">
              Note-qewqd1231sasd3e
            </SelectItem>
            <SelectItem value="Note-qewqd1231sa4sde">
              Note-qewqd1231sasde4
            </SelectItem>
            <SelectItem value="Note-qewqd1231s5asde">
              Note-qewqd1231sasde5
            </SelectItem>
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
      <div>
        <Button>Provide</Button>
      </div>
    </div>
  );
};

export default ProvideNotes;
