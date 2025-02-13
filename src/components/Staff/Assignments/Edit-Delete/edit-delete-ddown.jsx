import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import React from "react";
import EditOptions from "./edit-options";

const EditDeleteDdown = ({id}) => {
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
            <EditOptions id={id} />
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
