import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Image, Trash } from "lucide-react";
import React, { useEffect } from "react";
import SchoolEditDialog from "./school-edit-dialog";
import { useDeleteSchool } from "@/Hooks/use-school";

const SchoolCard = ({ data, refetch, img }) => {
  const mutation = useDeleteSchool();

  const handleDelete = () => {
    mutation.mutate(data.id);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      refetch();
    }
  }, [mutation.isPending, mutation.isSuccess]);

  return (
    <div className="border rounded-lg shadow-md flex overflow-hidden h-32 group hover:shadow-xl hover:-translate-y-0 duration-500 relative">
      <div className="py-0 border rounded-full mt-5 absolute bottom-2 left-2 hidden group-hover:flex">
        <SchoolEditDialog data={data} />
        <div>
          <Separator orientation="vertical" />
        </div>
        <Button
          variant="ghost"
          className="py-1 px-3 h-5"
          onClick={handleDelete}
        >
          <Trash />
        </Button>
      </div>
      <div className="w-3/5 p-6">
        <h3 className="text-2xl font-semibold">{data.name}</h3>
      </div>
      <div className="w-2/5">
        <img
          src={img}
          alt="shool"
          className="translate-x-7 translate-y-7 scale-110 group-hover:translate-x-0 group-hover:scale-125 duration-500"
        />
      </div>
    </div>
  );
};

export const SchoolCardSkeleton = () => {
  return (
    <div class="border rounded-lg shadow-md flex overflow-hidden h-32 animate-pulse">
      <div class="w-3/5 p-6">
        <h3 class="text-2xl font-semibold p-4 bg-muted"></h3>
      </div>
      <div class="w-2/5">
        <div className="translate-x-7 translate-y-7 scale-110 w-full bg-muted grid place-items-center h-full">
          <Image className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
