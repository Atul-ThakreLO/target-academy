import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useDeleteClass } from "@/Hooks/use-class";
import { useActiveInActive } from "@/Hooks/use-staff";
import {
  CircleCheckBig,
  CircleOff,
  Loader,
  Loader2,
  Trash,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const ClassCard = ({ data }) => {
  const mutation = useDeleteClass();

  const statusMutation = useActiveInActive("class");

  const handleDelete = () => {
    mutation.mutate(data.id);
  };

  const handleStatus = () => {
    statusMutation.mutate({ id: data.id, status: !data.isActive });
  };

  const { staff } = useSelector((state) => state.authStaff);

  return (
    <div className="border rounded-lg overflow-hidden p-1 relative group flex flex-col justify-between">
      {/* <div
        className={`absolute left-2 top-2 h-3 w-3 ${
          data.isActive ? "bg-green-500" : "bg-red-500"
        }  rounded-full animate-pulse`}
      ></div> */}
      {!staff.OfficeStaffInfo.isAdmin ? (
        ""
      ) : (
        <div className="absolute right-0 top-0 hidden group-hover:flex border rounded-full">
          <Button
            variant="ghost"
            className="px-2 h-7"
            onClick={handleDelete}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Trash />
            )}
          </Button>
          <div className="">
            <Separator orientation="vertical" />
          </div>
          <Button
            variant="ghost"
            className="px-2 h-7"
            onClick={handleStatus}
            disabled={statusMutation.isPending}
          >
            {statusMutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : data.isActive ? (
              <CircleOff />
            ) : (
              <CircleCheckBig />
            )}
          </Button>
        </div>
      )}

      <div className="py-8">
        <h6 className="text-4xl text-foreground/80 text-center font-bold tracking-widest">
          {data.name}
        </h6>
      </div>
      <div className={`w-full h-2 bg-foreground/40 rounded-full shadow-sm ${
          data.isActive ? "shadow-green-500" : "shadow-red-500"
        } `}></div>
    </div>
  );
};

export default ClassCard;

export const ClassCardSkeleton = () => {
  return (
    <div className="border rounded-lg overflow-hidden p-1 animate-pulse">
      <div className="py-8">
        <h6 className="bg-muted w-14 h-14 mx-auto p-4"></h6>
      </div>
      <div className="w-full h-2 bg-foreground/40 rounded-full"></div>
    </div>
  );
};
