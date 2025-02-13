import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Edit, MapPin, Trash } from "lucide-react";
import React from "react";
import JobSheet from "./job-sheet";

const JobCard = () => {
  return (
    <div className="border rounded-lg p-5 pt-2 shadow-md">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">Job Title</h4>
        <div>
          <Button variant="ghost">
            <Edit /> Edit
          </Button>
          <Button variant="ghost">
            <Trash /> Delete
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <span className="bg-green-300 rounded-full px-2 text-sm">Teacher</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem
          expedita sed temporibus animi quod distinctio ducimus tempora quo!
        </p>
        <div>
          <p>
            <b>Qualification:</b> Phd
          </p>
          <p>
            <b>Expreriance:</b> 0-4 Years
          </p>
          <p>
            <b>Expected Salary:</b> 10k-20k
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Target+Academy+Of+Science/@20.8406753,79.3205947,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4ab906d17c915:0x6251a323bad51b1b!8m2!3d20.8406753!4d79.3231696!16s%2Fg%2F11g7z9ntcj?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
          className="flex items-center gap-2"
        >
          <MapPin size={20} /> Umred
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="border-2 shadow-md">
              View Applications
            </Button>
          </SheetTrigger>
          <JobSheet />
        </Sheet>
      </div>
    </div>
  );
};

export default JobCard;
