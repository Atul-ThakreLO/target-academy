import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Package } from "lucide-react";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import MarksRowSckeleton from "@/components/Loaders/Student/marks-row-sckeleton";

const MarksTable = ({ data, isLoading }) => {
  return (
    <div className="p-2 sm:p-3 lg:p-6 mb-10 mt-10">
      <h1 className="text-center text-4xl mb-20 font-medium">Marks Table</h1>
      <div
        className={`border rounded-xl rounded-b-lg md:rounded-tr-lg p-2 md:p-8 ${
          open ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <Table className="rounded-xl">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center text-nowrap">
                Question Papers
              </TableHead>
              <TableHead className="text-right text-nowrap">
                Obtained Marks
              </TableHead>
              <TableHead className="text-right text-nowrap">
                Total Marks
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 3 }, (_, i) => <MarksRowSckeleton key={i} />)
            ) : !data.length > 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-xl font-medium py-10"
                >
                  Marks are not filled, Try to contact Admin
                </TableCell>
              </TableRow>
            ) : (
              data.map((mark) => (
                <TableRow key={mark.test_paper.title}>
                  <TableCell className="text-nowrap">
                    {mark.test_paper.title}
                  </TableCell>
                  <TableCell>{mark.test_paper.subject.name}</TableCell>
                  <TableCell>
                    {mark.test_paper.papers?.url ? (
                      <Dialog>
                        <DialogTrigger className="flex justify-center items-center w-full">
                          <Package />
                        </DialogTrigger>
                        <PdfPreview url={mark.test_paper.papers?.url} />
                      </Dialog>
                    ) : (
                      <div className="text-center">Not Uploaded yet</div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">{mark.marks}</TableCell>
                  <TableCell className="text-right">
                    {mark.test_paper.totalMarks}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarksTable;
