import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useEffect } from "react";
import JobAppliedCard, { JobAppliedCardSkeleton } from "./job-applied-card";
import { useGetJobApplications } from "@/Hooks/use-job";
import EditDialog from "../../Profile/Edit Profile/edit-dialog";

const JobSheet = ({ id, state }) => {
  const { data, isLoading, error, isError } = useGetJobApplications(id, state);
  // useEffect(() => console.log(isLoading), [isLoading]);
  return (
    <>
      <SheetContent className="min-w-[37vw]">
        <SheetHeader>
          <SheetTitle>Job Applications</SheetTitle>
          <SheetDescription>
            <b>Job Title: </b>
            {isLoading ? (
              <span className="inline-block p-2 w-36 bg-muted animate-pulse"></span>
            ) : data?.data.length > 0 ? (
              data?.data[0].job?.title
            ) : (
              "----"
            )}
            <br />
            <b>Job ID: </b>
            {isLoading ? (
              <span className="inline-block p-2 w-36 bg-muted animate-pulse"></span>
            ) : data?.data.length > 0 ? (
              data?.data[0].id
            ) : (
              "----"
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-5">
          {isLoading ? (
            <>
              <JobAppliedCardSkeleton />
              <JobAppliedCardSkeleton />
              <JobAppliedCardSkeleton />
            </>
          ) : data?.data.length > 0 ? (
            data?.data?.map((appli) => (
              <JobAppliedCard key={appli.id} data={appli} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <img src="/data-not-found.png" alt="Data Not Found" />
              <p className="text-4xl font-medium font-mono text-center">
                Appllicants are not Applied for this job
              </p>
            </div>
          )}
        </div>
        
        <EditDialog />
        <div>{/* <JobAppliedCardSkeleton /> */}</div>
        {/* <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter> */}
      </SheetContent>
    </>
  );
};

export default JobSheet;
