import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Delete, Edit, MoreHorizontal, Trash } from "lucide-react";
import React from "react";
import EditOptionsAll from "./edit-options-all";

const EditDeleteDdown = ({id}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger asChild>
              <span className="flex items-center px-2 gap-2 hover:bg-muted cursor-pointer">
                <Edit size={17} />
                Edit
              </span>
            </DialogTrigger>
            <EditOptionsAll id={id} />
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EditDeleteDdown;
