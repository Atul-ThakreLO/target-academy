import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserCog } from "lucide-react";

const StudentEdit = ({className}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={className}
        >
          <UserCog />
          Edit
        </div>
      </DialogTrigger>
      <DialogContent className="h-[70%]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[100%]">
          <div className="p-4">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5 mb-5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Emter your Name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 mb-5">
                  <Label htmlFor="mobile">Mobile No.</Label>
                  <Input
                    id="mobile"
                    type="mobile"
                    placeholder="Enter Mobile"
                    name="mobile"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="class">Class</Label>
                  <Select name="class_id">
                    <SelectTrigger id="class">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value={"val"}>asfdsd</SelectItem>
                      <SelectItem value={"val"}>asfdsd</SelectItem>
                      <SelectItem value={"val"}>asfdsd</SelectItem>
                      <SelectItem value={"val"}>asfdsd</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="school">School</Label>
                  <Select name="school_id">
                    <SelectTrigger id="school">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value={"school.school_id"}>
                        asfalfk
                      </SelectItem>
                      <SelectItem value={"school.school_id"}>
                        asfalfk
                      </SelectItem>
                      <SelectItem value={"school.school_id"}>
                        asfalfk
                      </SelectItem>
                      <SelectItem value={"school.school_id"}>
                        asfalfk
                      </SelectItem>
                      <SelectItem value={"school.school_id"}>
                        asfalfk
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudentEdit;
