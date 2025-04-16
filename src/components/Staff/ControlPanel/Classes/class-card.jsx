import { Button } from "@/components/ui/button";
import { useDeleteClass } from "@/Hooks/use-class";
import { Trash } from "lucide-react";
import React from "react";

const ClassCard = ({ data }) => {
  const mutation = useDeleteClass();

  const handleDelete = () => {
    mutation.mutate(data.id);
  };

  return (
    <div className="border rounded-lg overflow-hidden p-1 relative group flex flex-col justify-between">
      <div className="absolute right-0 top-0 hidden group-hover:block">
        <Button variant="ghost" className="p-1 h-7" onClick={handleDelete}>
          <Trash />
        </Button>
      </div>
      <div className="py-8">
        <h6 className="text-4xl text-foreground/80 text-center font-bold tracking-widest">
          {data.name}
        </h6>
      </div>
      <div className="w-full h-2 bg-foreground/40 rounded-full"></div>
    </div>
  );
};

export default ClassCard;

export const ClassCardSkeleton = () => {
  return (
    <div class="border rounded-lg overflow-hidden p-1 animate-pulse">
      <div class="py-8">
        <h6 class="bg-muted w-14 h-14 mx-auto p-4">
        </h6>
      </div>
      <div class="w-full h-2 bg-foreground/40 rounded-full"></div>
    </div>
  );
};
