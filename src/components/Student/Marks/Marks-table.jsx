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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
const MarksTable = ({ data }) => {
  return (
    <div className="p-2 sm:p-3 lg:p-6 mb-10 mt-10">
      <h1 className="text-center text-4xl mb-20 font-medium">Marks Table</h1>
      <div className="border rounded-xl">
        <Table className="rounded-xl">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="text-center">Question Papers</TableHead>
              <TableHead className="text-right">Total Marks</TableHead>
              <TableHead className="text-right">Obtained Marks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((mark) => (
              <TableRow>
                <TableCell>{mark.test_paper.title}</TableCell>
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
                <TableCell className="text-right">50</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
        </Table>
      </div>
    </div>
  );
};

export default MarksTable;
