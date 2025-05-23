import React from "react";
import EditOption from "./edit-option";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useDeleteAssignment } from "@/Hooks/use-assignment";
import { Separator } from "@/components/ui/separator";
import DeleteOption from "./delete-option";

const EditDeleteOptions = ({ data, deleteMutation, editMutation }) => {
  const mutation = useDeleteAssignment();

  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      <EditOption data={data} editMutation={editMutation} />
      <div>
        <Separator orientation="vertical" />
      </div>
      <DeleteOption data={data} deleteMutation={mutation} />
    </div>
  );
};

export default EditDeleteOptions;
