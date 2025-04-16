import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import nickName from "@/components/Utils/nick-name";
import React from "react";

const NoticeCard = ({ data }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        {/* <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription> */}
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
      </CardHeader>
      <CardContent className="justify-self-start h-full">
        <pre className="mt-1 mb-6 whitespace-pre-wrap">{data.content}</pre>
      </CardContent>
      <CardFooter>
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
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoticeCard;
