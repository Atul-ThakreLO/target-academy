import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import CircleProgress from "./circle-progress";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";

const SheetAssignment = ({ id, title }) => {
  return (
    <Sheet>
      <SheetTrigger>{title}</SheetTrigger>
      <SheetContent className="min-w-[35vw]">
        <SheetTitle>
          <span className="hover:underline hover:text-blue-500">
            Assignment-Name {id}
          </span>
        </SheetTitle>
        <SheetDescription>
          <b>By:</b> Teacher Name
        </SheetDescription>
        <div className="flex gap-4 mt-7">
          <div className="w-1/2">
            <CircleProgress prog={60} />
          </div>
          <div>
            <Separator orientation="vertical" />
          </div>
          <div className="w-1/2 flex items-center">
            <table className="w-full">
              <tr>
                <td>Class</td>
                <td>:</td>
                <td>12th</td>
              </tr>
              <tr>
                <td>Batch</td>
                <td>:</td>
                <td>Batch-1</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>:</td>
                <td>Chemistry</td>
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
            {/* <Table>
              <TableBody>
                <TableRow className="">
                  <TableCell>Student Name</TableCell>
                  <TableCell>pdf</TableCell>
                </TableRow>
                <TableRow className="">
                  <TableCell>Student Name</TableCell>
                  <TableCell>pdf</TableCell>
                </TableRow>
                <TableRow className="">
                  <TableCell>Student Name</TableCell>
                  <TableCell>pdf</TableCell>
                </TableRow>
              </TableBody>
            </Table> */}
            <div className="p-3 px-4 shadow-sm hover:shadow-md duration-300 hover:bg-muted/80 border rounded-xl flex justify-between items-center">
              <div>ascasdfcsadfcsdfc</div>
              <div className="mr-5">
                <Dialog
                //  open={dialogState} onOpenChange={handleDialog}
                >
                  <DialogTrigger className="hover:text-blue-500">
                    {title}
                  </DialogTrigger>
                  <PdfPreview />
                </Dialog>
              </div>
            </div>
            <div className="p-3 px-4 shadow-sm hover:shadow-md duration-300 hover:bg-muted/80 border rounded-xl flex justify-between items-center">
              <div>ascasdfcsadfcsdfc</div>
              <div className="mr-5">hgjkl</div>
            </div>
            <div className="p-3 px-4 shadow-sm hover:shadow-md duration-300 hover:bg-muted/80 border rounded-xl flex justify-between items-center">
              <div>ascasdfcsadfcsdfc</div>
              <div className="mr-5">hgjkl</div>
            </div>
          </div>
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
};

export default SheetAssignment;
