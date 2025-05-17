import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useDeleteAssignment } from "@/Hooks/use-assignment";
import { Separator } from "@/components/ui/separator";
import EditOption from "../../Assignments/Edit-Delete/edit-option";
import { useDeleteTestPaper } from "@/Hooks/use-test-paper";
import DeleteOption from "./delete-option";

const EditDeleteOptions = ({ data, editMutation }) => {
  // const mutation = useDeleteAssignment();
  const mutation = useDeleteTestPaper()

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
