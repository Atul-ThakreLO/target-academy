import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleCheckBig, CircleOff, Image, Loader2, Trash } from "lucide-react";
import React, { useEffect } from "react";
import SchoolEditDialog from "./school-edit-dialog";
import { useDeleteSchool } from "@/Hooks/use-school";
import { useSelector } from "react-redux";
import { useActiveInActive } from "@/Hooks/use-staff";

const SchoolCard = ({ data, refetch, img }) => {
  const mutation = useDeleteSchool();
  const statusMutation = useActiveInActive("school", ["school"]);

  const handleDelete = () => {
    mutation.mutate(data.id);
  };

  const handleStatus = () => {
    statusMutation.mutate({ id: data.id, status: !data.isActive });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      refetch();
    }
  }, [mutation.isPending, mutation.isSuccess]);

  const { staff } = useSelector((state) => state.authStaff);

  return (
    <div className="border rounded-lg shadow-md flex overflow-hidden h-32 group hover:shadow-xl hover:-translate-y-0 duration-500 relative">
      {!staff.OfficeStaffInfo.isAdmin ? (
        ""
      ) : (
        <div className="py-0 border rounded-full mt-5 absolute bottom-2 left-2 hidden group-hover:flex items-center">
          <SchoolEditDialog data={data} />
          <div className="h-full">
            <Separator orientation="vertical" />
          </div>
          <Button
            variant="ghost"
            className="py-1 px-3 h-5"
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
          <Button
            variant="ghost"
            className="py-1 px-3 h-5"
            disabled={mutation.isPending}
            onClick={handleDelete}
          >
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Trash />
            )}
          </Button>
        </div>
      )}
      <div
        className={`absolute right-2 top-2 h-3 w-3 ${
          data.isActive ? "bg-green-500" : "bg-red-500"
        }  rounded-full animate-pulse`}
      ></div>
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
    <div className="border rounded-lg shadow-md flex overflow-hidden h-32 animate-pulse">
      <div className="w-3/5 p-6">
        <h3 className="text-2xl font-semibold p-4 bg-muted"></h3>
      </div>
      <div className="w-2/5">
        <div className="translate-x-7 translate-y-7 scale-110 w-full bg-muted grid place-items-center h-full">
          <Image className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
