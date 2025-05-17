import { Button } from "@/components/ui/button";
import { useDeleteNotes } from "@/Hooks/use-notes";
import { Loader, Loader2, Trash } from "lucide-react";
import React from "react";

const DeleteNotes = ({ data }) => {
  const mutation = useDeleteNotes();
  const handleDelete = () => {
    mutation.mutate(data.id);
  };
  return (
    <Button
      variant="ghost"
      className="p-2"
      onClick={handleDelete}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? <Loader2 className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default DeleteNotes;
