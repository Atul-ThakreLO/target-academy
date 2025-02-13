import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import useTable from "./useTable";

const CustomTable = ({ columns, rows, keys, More, toogleActionButton }) => {

//   const [dialogState, setDialogState] = useState(false);

  const { selectedIds, toogleAll, toogleSelect } = useTable(rows);

  useEffect(() => {
    if (selectedIds.length > 0) {
      toogleActionButton(true);
    } else {
      toogleActionButton(false);
    }
  }, [selectedIds]);

//   useEffect(() => {
//     if (dialogState) {
//       window.history.pushState({ dialog: true }, "");
//     }

//     const handlePopState = (e) => {
//       if (e.state?.dialog) {
//         setDialogState(false);
//       }
//     };

//     window.addEventListener("popstate", handlePopState);

//     return () => window.removeEventListener("popstate", handlePopState);
//   }, [dialogState]);

//   const handleDialog = (state) => {
//     setDialogState(state);
//     if (!state) {
//       window.history.back();
//     }
//   };

  return (
    <div className="border rounded-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border-r">
              <Checkbox
                checked={selectedIds.length === rows.length}
                onCheckedChange={() => toogleAll()}
              />
            </TableHead>
            {columns.map((column, index) => (
              <TableHead className="text-center" key={index}>
                {column}
              </TableHead>
            ))}
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((note) => (
            <TableRow key={note.id}>
              <TableCell className="border-r">
                <Checkbox
                  checked={selectedIds.includes(note.id)}
                  onCheckedChange={() => toogleSelect(note.id)}
                />
              </TableCell>
              <TableCell>
                <Dialog
                //  open={dialogState} onOpenChange={handleDialog}
                 >
                  <DialogTrigger className="hover:text-blue-500">
                    {note.title}
                  </DialogTrigger>
                  <PdfPreview />
                </Dialog>
              </TableCell>
              {keys.map((key, index) => (
                <TableCell className="text-center" key={index}>
                  {note[key]}
                </TableCell>
              ))}
              {/* <TableCell className="text-center">{note.class}</TableCell>
              <TableCell className="text-center">{note.posted_by}</TableCell>
              <TableCell className="text-center">{note.date}</TableCell> */}
              <TableCell className="text-center">
                <More id={note.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
