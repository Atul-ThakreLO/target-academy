import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Edit, MapPin, Trash } from "lucide-react";
import React, { useState } from "react";
import JobSheet from "./job-sheet";
import { Dialog } from "@/components/ui/dialog";
import JobEditForm from "./job-edit-form";
import { useDeleteJob } from "@/Hooks/use-job";

const JobCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSheet = (e) => {
    setIsOpen(e);
  };

  const mutation = useDeleteJob();

  const handleDeleteJob = () => {
    mutation.mutate(data.id);
  };

  return (
    <div className="border rounded-lg p-5 pt-2 shadow-md">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">{data.title}</h4>
        <div>
          <JobEditForm defalut={data} />
          <Button variant="ghost" onClick={handleDeleteJob}>
            <Trash /> Delete
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <span className="bg-green-300 rounded-full px-2 text-sm">
          {data.role}
        </span>
        <p>{data.description}</p>
        <div>
          <p>
            <b>Qualification:</b> {data.qualification}
          </p>
          <p>
            <b>Expreriance:</b> {data.experience}
          </p>
          <p>
            <b>Expected Salary:</b> {data.salary}
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
        <Sheet onOpenChange={handleSheet}>
          <SheetTrigger asChild>
            <Button variant="outline" className="border-2 shadow-md">
              View Applications
            </Button>
          </SheetTrigger>
          <JobSheet id={data.id} state={isOpen} />
        </Sheet>
      </div>
    </div>
  );
};

export default JobCard;
