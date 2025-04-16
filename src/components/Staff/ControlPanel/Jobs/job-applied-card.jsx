import PdfPreview from "@/components/Student/Notes-Papers/pdf-preview";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useAcceptJobLetter } from "@/Hooks/use-job";
import { BriefcaseBusiness, FileUser, Loader, Mail } from "lucide-react";
import React from "react";

const JobAppliedCard = ({ data }) => {
  const mutation = useAcceptJobLetter();

  const acceptJobLetter = () => {
    mutation.mutate(data);
  };

  return (
    <div className="border rounded-lg py-4 px-3 shadow-md mt-5">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium flex items-center gap-2">
          <span className="p-2 border bg-muted rounded-full">
            <BriefcaseBusiness />
          </span>
          {data.name}
        </h4>
        <a href={`mailto:${data.email}`}>
          <Button variant="outline" className="border-2 rounded-xl">
            <Mail /> Send Mail
          </Button>
        </a>
      </div>
      <div className="mt-2 px-2">
        <div>
          <h6 className="font-medium">Contact Details:</h6>
          <div className="flex items-center justify-evenly">
            <p>
              <span>Email: </span> {data.email}
            </p>
            <p>
              <span>Phone: </span> {data.phone}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-medium">Experience:</h6>
          <p>5 Years</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-medium">Job Title:</h6>
          <p>{data.job.title}</p>
        </div>
      </div>

      {/* <Separator /> */}
      <div className="flex justify-between mt-5">
        <Dialog
        //  open={dialogState} onOpenChange={handleDialog}
        >
          <DialogTrigger className="hover:text-blue-500" asChild>
            <Button variant="outline" className="border-2 rounded-xl">
              <FileUser />
              See Resume
            </Button>
          </DialogTrigger>
          <PdfPreview url={data.resume_url} />
        </Dialog>
        <Button
          type={"button"}
          onClick={acceptJobLetter}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? <Loader className="animate-spin" /> : "Accept"}
        </Button>
      </div>
    </div>
  );
};

export const JobAppliedCardSkeleton = () => {
  return (
    <div className="border rounded-lg py-4 px-3 animate-pulse mt-5">
      <div className="flex items-center justify-between">
        <div className="p-6 bg-muted w-1/2"></div>
        <div className="bg-muted p-4 w-3/12 rounded-xl"></div>
      </div>
      <div className="mt-2 px-2">
        <div>
          <h6 className="p-3 w-32 bg-muted"></h6>
          <div className="flex items-center justify-evenly mt-2">
            <div className="p-2 bg-muted w-40"></div>
            <div className="p-2 bg-muted w-40"></div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted w-48 mt-2"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted w-48 mt-2"></div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="bg-muted p-4 w-3/12 rounded-xl"></div>
        <div className="bg-muted p-4 w-3/12 rounded-xl"></div>
      </div>
    </div>
  );
};

export default JobAppliedCard;
