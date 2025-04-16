import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import nickName from "../nick-name";

const TableProfile = ({ src, alt, name, email }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <Avatar className="h-12 w-12">
        <AvatarFallback>{nickName(name)}</AvatarFallback>
        <AvatarImage
          src={src}
          alt={alt}
          className=" object-cover object-center"
        />
      </Avatar>
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default TableProfile;
