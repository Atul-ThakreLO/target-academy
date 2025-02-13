import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleOff, Edit, MoreHorizontal } from "lucide-react";
import React from "react";
import EditOptionsProvided from "./edit-options-provided";

const EditUnprovideDdown = ({id}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger asChild>
              <span className="flex px-2 items-center gap-2 hover:bg-muted cursor-pointer">
                <Edit size={17} /> Edit
              </span>
            </DialogTrigger>
            <EditOptionsProvided id={id} />
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CircleOff /> UnProvide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditUnprovideDdown;
