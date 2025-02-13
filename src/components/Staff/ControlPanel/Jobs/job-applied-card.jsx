import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, FileUser, Mail } from "lucide-react";
import React from "react";

const JobAppliedCard = () => {
  return (
    <div className="border rounded-lg py-4 px-3 shadow-md">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium flex items-center gap-2">
          <span className="p-2 border bg-muted rounded-full">
            <BriefcaseBusiness />
          </span>
          Applicant Name
        </h4>
        <Button variant="outline" className="border-2 rounded-xl">
          <Mail /> Send Mail
        </Button>
      </div>
      <div className="mt-2 px-2">
        <div>
          <h6 className="font-medium">Contact Details:</h6>
          <div className="flex items-center justify-evenly">
            <p>
              <span>Email: </span> abc@gmail.com
            </p>
            <p>
              <span>Phone: </span> 1234567890
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-medium">Experience:</h6>
          <p>5 Years</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-medium">Job Title:</h6>
          <p>Job Name</p>
        </div>
      </div>
      
      {/* <Separator /> */}
      <div className="flex justify-between mt-5">
        <Button variant="outline" className="border-2 rounded-xl">
          <FileUser />
          See Resume
        </Button>
        <Button>Accept </Button>
      </div>
    </div>
  );
};

export default JobAppliedCard;
