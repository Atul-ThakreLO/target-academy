import React from "react";
import { Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddNotes = () => {
  return (
    <div className="mt-5">
      <div className="w-full">
        <div
          className="w-[70%] h-48 mx-auto border-2 border-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer"
          onClick={() => document.getElementById("notes").click()}
        >
          <Upload size={70} />
          <p>Drag And Drop || Click to select</p>
        </div>
        <Input type="file" id="notes" className="hidden" />
      </div>
      <div className="mt-10 flex justify-between items-center px-12">
        <div className="">
          <Label htmlFor="filename">Name of File</Label>
          <Input
            className="w-full mt-2 border-2"
            placeholder="Enter a file Name"
            id="filename"
            name="filename"
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
        <Button>Add Note</Button>
      </div>
    </div>
  );
};

export default AddNotes;
