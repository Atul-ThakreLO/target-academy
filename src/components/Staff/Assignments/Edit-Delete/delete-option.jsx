import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import React from "react";

const DeleteOption = ({ data, deleteMutation }) => {
  const handleDelete = () => {
    deleteMutation.mutate(data.id);
  };
  return (
    <Button
      variant="ghost"
      className="p-2"
      disabled={deleteMutation.isPending}
      onClick={handleDelete}
    >
      {deleteMutation.isPending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Trash />
      )}
    </Button>
  );
};

export default DeleteOption;
