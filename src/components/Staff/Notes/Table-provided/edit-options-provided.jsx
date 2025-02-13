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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit } from "lucide-react";
import React from "react";

const EditOptionsProvided = ({ id }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Edit /> <span>Edit ID: {id}</span>
        </DialogTitle>
      </DialogHeader>
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
      <DialogFooter>
        <Button>Apply Changes</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditOptionsProvided;
