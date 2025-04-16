import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SheetContent,
  SheetFooter,
} from "@/components/ui/sheet";
import nickName from "@/components/Utils/nick-name";
import { GraduationCap, Mail, Phone, Trash } from "lucide-react";
import React from "react";
import EditDialog from "./Edit Profile/edit-dialog";
import EditDpDialog from "./Edit Profile/edit-dp-dialog";

const StaffProfileSheet = ({ data }) => {
  return (
    <SheetContent className="overflow-hidden">
      {/* <SheetHeader>
        <SheetTitle>Staff profile</SheetTitle>
        <SheetDescription>nbb</SheetDescription>
      </SheetHeader> */}
      <div>
        <div className="bg-gradient-to-tr from-[#F3EFEC] via-[#F3EFEA] to-[#D598A1] w-full h-28 scale-x-[1.2] md:scale-x-[1.15] rounded-b-3xl relative -top-6"></div>
        <div className="-mt-14 flex justify-between items-center">
          <div className="relative group">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={data?.OfficeStaffInfo?.avtar_url}
                alt={data?.OfficeStaffInfo?.name}
                className=" object-cover object-center"
              />
              <AvatarFallback>
                {nickName(data?.OfficeStaffInfo?.name)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute top-0 right-0 bg-background rounded-full hidden group-hover:block">
              <EditDpDialog defaultData={data} />
            </div>
          </div>
          <div className="flex py-0 border rounded-full mt-5">
            <EditDialog defaultValue={data} />
            <div>
              <Separator orientation="vertical" />
            </div>
            <Button variant="ghost" className="py-1 px-4 h-6">
              <Trash size={15} />
            </Button>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <h1 className="text-xl font-medium">{data?.OfficeStaffInfo?.name}</h1>
            <h1>@{data?.email?.split("@")[0]}</h1>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
          <div className="px-4 py-0 border-2 rounded-md text-sm font-medium">
            {data?.OfficeStaffInfo?.role}
          </div>
          {!data?.OfficeStaffInfo?.isAdmin && (
            <div className="px-4 py-0 border-2 rounded-md text-sm font-medium">
              ADMIN
            </div>
          )}
        </div>
        <div className="mt-5">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ipsa nemo eaque vel minus eius facilis dignissimos
          </p>
        </div>
        <div className="mt-5">
          <h6 className="font-bold">Qualification:</h6>
          <p className="flex gap-2 pl-3">
            <GraduationCap /> {data?.OfficeStaffInfo?.qualification}
          </p>
        </div>
        <div className="mt-5">
          <h6 className="font-bold">Expertise:</h6>
          <div className="flex gap-3 mt-2">
            {data?.OfficeStaffInfo?.subjects?.split(",").map((subject) => (
              // <p className="flex gap-2 pl-3 items-center"><Book size={20} /> {subject}</p>
              <div className="px-4 py-0 border-2 rounded-md text-sm font-medium flex items-center gap-2">
                <span className="bg-foreground rounded-full inline-block h-2 aspect-square"></span>{" "}
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SheetFooter className={"absolute bottom-0 left-0 w-full p-4"}>
        <div className=" py-4 px-3 border rounded-lg w-full">
          <h6 className="font-bold">Contact Details</h6>
          <div className="px-4 text-sm font-medium flex items-center gap-2 mt-2">
            <Mail size={20} /> {data?.email}
          </div>
          <div className="px-4 text-sm font-medium flex items-center gap-2 mt-2">
            <Phone size={18} /> {data?.OfficeStaffInfo?.mobile}
          </div>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};

export default StaffProfileSheet;
