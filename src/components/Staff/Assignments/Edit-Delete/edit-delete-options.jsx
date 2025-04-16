import React from "react";
import EditOption from "./edit-option";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useDeleteAssignment } from "@/Hooks/use-assignment";

const EditDeleteOptions = ({ data }) => {
  const mutation = useDeleteAssignment();
  const handleDelete = () => {
    mutation.mutate(data.id);
  };
  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      <EditOption data={data} />
      <Button variant="ghost" className="p-0" onClick={handleDelete}>
        {mutation.isPending ? <Loader2 className="animate-spin" /> : <Trash />}
      </Button>
    </div>
  );
};

export default EditDeleteOptions;
