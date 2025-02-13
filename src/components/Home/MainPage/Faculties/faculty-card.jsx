import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const FacultyCard = () => {
  return (
    <div className="p-3 bg-background rounded-lg border">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>TE</AvatarFallback>
          <AvatarImage src="" alt="" />
        </Avatar>
        <span>asfdafsdfvsfs</span>
      </div>
      <span className="ml-8">dfsgsgvfgdfgbd</span>
    </div>
  );
};

export default FacultyCard;
