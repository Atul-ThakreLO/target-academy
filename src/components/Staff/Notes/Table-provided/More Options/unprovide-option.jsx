import { Button } from "@/components/ui/button";
import { useUnprovideNotes } from "@/Hooks/use-notes";
import { CircleOff, Loader } from "lucide-react";
import React from "react";

const UnprovideOption = ({ data }) => {
  const mutation = useUnprovideNotes();

  const handleUnprovide = () => {
    mutation.mutate(data.id);
    // console.log(data);
  };

  return (
    <Button
      variant="Ghost"
      className="p-0"
      onClick={handleUnprovide}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? <Loader className="animate-spin" /> : <CircleOff />}
    </Button>
  );
};

export default UnprovideOption;
