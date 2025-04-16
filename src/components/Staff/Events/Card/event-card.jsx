import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  AlarmClock,
  Calendar,
  Edit,
  Trash,
} from "lucide-react";
import React, { useState } from "react";

const EventCard = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="border rounded-lg shadow-md">
      <div className="flex justify-between px-4 py-2">
        <div className="flex gap-4 items-center">
          {/* <BookCheck /> */}
          <span className="inline-block h-3 w-3 bg-green-500 rounded-full animate-ping mt-1"></span>
          <span className="text-2xl">Test</span>
        </div>
        <div className="flex gap-2 items-center pl-1 pr-3 py-1 bg-muted rounded-md w-max">
          <Avatar className="h-8 w-8">
            <AvatarFallback>TE</AvatarFallback>
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv08IFzcctSGreK52O63jDJ38FFFr3FfAdFw&s"
              alt=""
            />
          </Avatar>
          <span>Teacher Name</span>
        </div>
      </div>
      <Separator />
      <div className="px-4 py-2">
        <div className="flex justify-between pb-2">
          <div className="flex gap-2 items-center bg-muted px-3 py-1 rounded-lg">
            <Calendar size={20} />
            <span className="">12-02-2025,</span>
            <span className="">6:00 PM</span>
          </div>
          <div className="flex gap-2 items-center bg-muted px-3 py-1 rounded-lg">
            <AlarmClock size={20} />
            Duration
            <span className="">: 1hr</span>
          </div>
        </div>
        <Separator />
        <div className="px-4 py-2">
          <p>
            This is to inform you that a test for
            <span className="text-lg underline underline-offset-2 decoration-2 px-3 decoration-dotted font-semibold">
              Chemistry
            </span>
            will be held on above mentioned date. The test will cover the topic
            of
            <span className="text-lg underline underline-offset-2 decoration-2 px-3 decoration-dotted font-semibold">
              Chapter-1
            </span>
            and will be worth
            <span className="text-lg underline underline-offset-2 decoration-2 px-3 decoration-dotted font-semibold">
              50
            </span>
            marks.
          </p>
          <p>
            Please make sure to prepare well for the test. If you have any
            questions or need any clarifications, please feel free to reach out
            to your respective teachers.
          </p>
          <p>
            <b>We wish you all the best for your test!</b>
          </p>
        </div>
        <Separator />
        <div className="flex justify-end gap-4 pt-2">
          <div className="flex items-center gap-2 bg-muted px-3 py- rounded-md">
            <Edit size={15} /> Edit
          </div>
          <div className="flex items-center gap-2 bg-muted px-3 py- rounded-md">
            <Trash size={15} /> Delete
          </div>
        </div>
      </div>

      {/* <Separator /> */}
    </div>
  );
};

export default EventCard;
