import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useRef, useState } from "react";
import EditNotice from "../Edit Notice/edit-notice";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import nickName from "@/components/Utils/nick-name";
import { useDeleteAssignment } from "@/Hooks/use-assignment";
import { useDeleteNotice } from "@/Hooks/use-notice";

const NoticeCard = ({ data }) => {
  const mutation = useDeleteNotice();
  const handleDelete = () => {
    mutation.mutate(data.id);
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col justify-between">
          <h6 className="text-lg font-semibold">{data.title}</h6>
          <div className="flex justify-end gap-1">
            <span className="bg-red-300 rounded-full h-min w-min px-3 flex items-center text-sm">
              Edited
            </span>
            <span className="bg-green-300 rounded-full h-min w-min px-3 flex items-center text-sm">
              Admin
            </span>
            <span className="bg-blue-300 rounded-full h-min w-min px-3 flex items-center text-sm">
              Important
            </span>
          </div>
        </div>

        <pre className="mt-1 mb-6 whitespace-pre-wrap">{data.content}</pre>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 mb-8">
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              {nickName(data.OfficeStaff.OfficeStaffInfo.name)}
            </AvatarFallback>
            <AvatarImage
              src={data.OfficeStaff.OfficeStaffInfo.avtar_url}
              alt={data.OfficeStaff.OfficeStaffInfo.name}
              className="object-cover"
            />
          </Avatar>
          <div>
            <p>{data.OfficeStaff.email}</p>
            <p>{data.OfficeStaff.OfficeStaffInfo.name}</p>
          </div>
        </div>
        <div className="">
          <EditNotice data={data} />
          <Button variant="ghost" className="px-2" onClick={handleDelete}>
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Trash />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
