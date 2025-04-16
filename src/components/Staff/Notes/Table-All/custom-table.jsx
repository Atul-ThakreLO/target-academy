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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import useTable from "@/components/Utils/Table/useTable";
import { setSelectedID } from "@/Redux/slices/secondary/notes/notes-id-slice";
import { useSidebar } from "@/components/ui/sidebar";

const CustomTable = ({ columns, rows = {}, keys, More }) => {
  //   const [dialogState, setDialogState] = useState(false);
  const { open } = useSidebar();
  const { selectedIDs } = useSelector((state) => state.notesSelectedID);

  const { toogleAll, toogleSelect } = useTable(
    rows,
    selectedIDs,
    setSelectedID
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`border rounded-xl mx-auto ${
        open ? "scrollable-table-open" : "scrollable-table-closed"
      }`}
    >
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
                  <DialogTrigger className="hover:text-blue-500 text-nowrap">
                    {row.title}
                  </DialogTrigger>
                  <PdfPreview url={row.url} />
                </Dialog>
              </TableCell>
              {keys?.map((key, index) => (
                <TableCell className="text-center text-nowrap" key={index}>
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
  );
};

export default CustomTable;
