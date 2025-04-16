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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { setNotesID } from "@/Redux/slices/secondary/notes/notes-data-slice";

const CustomTable = ({
  columns,
  rows = {},
  keys,
  More,
}) => {
  //   const [dialogState, setDialogState] = useState(false);

  const { toogleAll, toogleSelect } = useTable(rows);
  const dispatch = useDispatch();

  const { selectedIDs } = useSelector((state) => state.tableRowIDs);

  // useEffect(() => {
  //   if (selectedIds.length > 0) {
  //     toogleActionButton(true, selectedIds);
  //   } else {
  //     toogleActionButton(false);
  //   }
  // }, [selectedIds]);

  // useEffect(() => {
  //   // dispatch(setNotesID(selectedIds));
  //   console.log(selectedIDs);
  // }, [selectedIDs]);

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
    <ScrollArea className="min-w-[50rem]">
      <div className="border rounded-xl min-w-[50rem]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-r">
                <Checkbox
                  checked={selectedIDs.length === rows?.length}
                  onCheckedChange={() => toogleAll()}
                />
              </TableHead>
              {columns?.map((column, index) => (
                <TableHead className="text-center" key={index}>
                  {column}
                </TableHead>
              ))}
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="border-r">
                  <Checkbox
                    checked={selectedIDs.includes(row.id)}
                    onCheckedChange={() => toogleSelect(row.id)}
                  />
                </TableCell>
                <TableCell>
                  <Dialog
                  //  open={dialogState} onOpenChange={handleDialog}
                  >
                    <DialogTrigger className="hover:text-blue-500">
                      {row.title}
                    </DialogTrigger>
                    <PdfPreview url={row.url} />
                  </Dialog>
                </TableCell>
                {keys?.map((key, index) => (
                  <TableCell className="text-center" key={index}>
                    {row[key]?.name || row[key]}
                  </TableCell>
                ))}
                {/* <TableCell className="text-center">{note.class}</TableCell>
              <TableCell className="text-center">{note.posted_by}</TableCell>
              <TableCell className="text-center">{note.date}</TableCell> */}
                <TableCell className="text-center">
                  <More data={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CustomTable;
