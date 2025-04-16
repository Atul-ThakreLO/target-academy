import { Button } from "@/components/ui/button";
import { useDeleteNotes } from "@/Hooks/use-notes";
import { Loader, Trash } from "lucide-react";
import React from "react";

const DeleteNotesPapers = ({ data, mutation }) => {
  const handleDelete = () => {
    mutation.mutate(data.id);
  };
  return (
    <Button
      variant="ghost"
      className="p-0"
      onClick={handleDelete}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? <Loader className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default DeleteNotesPapers;
