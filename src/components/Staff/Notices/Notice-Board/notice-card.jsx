import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useRef, useState } from "react";

const NoticeCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h6 className="text-lg font-semibold">Title</h6>
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
      
      <p className="mt-1 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        commodi perspiciatis suscipit fugiat, odit praesentium fugit, laborum
        aut distinctio cum illum officiis dolorum sint facilis ratione deserunt
        tempore aspernatur perferendis.
      </p>
      <div className="flex gap-2 mb-8">
        <Avatar className="h-12 w-12">
          <AvatarFallback>TE</AvatarFallback>
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
            alt=""
          />
        </Avatar>
        <div>
          <p>abc@gmail.com</p>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
