import { TransitionLink } from "@/components/Utils/transition-link";
import { Link } from "lucide-react";
import React, { useState } from "react";
import NoticeSwiper from "./notice-swiper";

const NoticeBoard = ({ display }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="border rounded-xl p-4 bg-muted shadow-md">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Notice Board</p>
        {display === "dashboard" ? (
          <TransitionLink href={"/staff/assignments"}>
            <Link size={18} />
          </TransitionLink>
        ) : (
          <div className="flex">
            {/* <Button variant="ghost">
              <Trash size={17} /> Delete
            </Button> */}
          </div>
        )}
      </div>
      <div className="mt-2">
        <NoticeSwiper />
      </div>
    </div>
  );
};

export default NoticeBoard;
