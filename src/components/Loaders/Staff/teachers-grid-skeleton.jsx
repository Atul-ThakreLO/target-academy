import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const TeachersGridSkeleton = () => {
  return (
    <Avatar
      className="border-2 cursor-pointer hover:border-foreground"
      key={""}
    >
      <AvatarFallback>Lo</AvatarFallback>
      <AvatarImage src={""} alt={""} />
    </Avatar>
  );
};

export default TeachersGridSkeleton;
