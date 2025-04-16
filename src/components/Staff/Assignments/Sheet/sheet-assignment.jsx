import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";
import CircleProgress from "./circle-progress";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { useGetAssignmentStudents } from "@/Hooks/use-assignment";
import { Loader2 } from "lucide-react";
import { formatDate } from "@/components/Utils/Date Formater/formatDate";

const SheetAssignment = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const {
    data: students,
    isLoading,
    isFetched,
  } = useGetAssignmentStudents(
    {
      batchID: data.batch_id,
      assiID: data.id,
    },
    open
  );
  useEffect(() => {
    if (isFetched) {
      console.log("data", data);

      console.log(students.data);
      const total = students.data.length;
      const completedCount = students.data[0]._count.CompletedAssignment;
      setProgress(((completedCount / total) * 100).toFixed(2));
    }
  }, [isFetched, isLoading]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="text-nowrap">{data.title}</SheetTrigger>
      {open && (
        <SheetContent className="min-w-[90vw] md:min-w-[35vw] px-3 md:px-4">
          <SheetTitle>
            <span className="hover:underline hover:text-blue-500">
              Assignment-Name: {data.title}
            </span>
          </SheetTitle>
          <SheetDescription>
            <b>By:</b> {data.staff.OfficeStaffInfo.name}
          </SheetDescription>
          <div className="flex gap-4 mt-7">
            <div className="w-1/2">
              <CircleProgress prog={progress} />
            </div>
            <div>
              <Separator orientation="vertical" />
            </div>
            <div className="w-1/2 flex items-center">
              <table className="w-full">
                <tr>
                  <td>Class</td>
                  <td>:</td>
                  <td>{data.class.name}</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>:</td>
                  <td>{data.batch.name}</td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td>:</td>
                  <td>{data.subject.name}</td>
                </tr>
              </table>
            </div>
          </div>

          {/* Submitions */}

          <div className="mt-7">
            <h6 className="text-xl font-light tracking-widest text-foreground">
              Submitions
            </h6>
            <div className="flex flex-col gap-3 mt-5">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                students.data.map((student) => (
                  <div className="p-1 px-4 md:p-3 shadow-sm hover:shadow-md duration-300 hover:bg-muted/80 border rounded-xl flex justify-between items-center">
                    <div>{student.StudentInfo.student_name}</div>
                    {!student.CompletedAssignment.length > 0 ? (
                      <div>Not Submited</div>
                    ) : (
                      <div className="md:mr-5">
                        <Dialog
                        //  open={dialogState} onOpenChange={handleDialog}
                        >
                          <DialogTrigger className="hover:text-blue-500">
                            View Submission
                          </DialogTrigger>
                          <PdfPreview
                            url={student.CompletedAssignment[0].pdf_url}
                          />
                        </Dialog>
                        <p className="text-right text-gray-500">
                          {formatDate(student.CompletedAssignment[0].date)}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
        </SheetContent>
      )}
    </Sheet>
  );
};

export default SheetAssignment;
