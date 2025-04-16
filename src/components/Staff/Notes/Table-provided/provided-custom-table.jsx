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
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import useTable from "@/components/Utils/Table/useTable";
import { setSelectedID } from "@/Redux/slices/secondary/notes/provided-selected-id-slice";
import { useSidebar } from "@/components/ui/sidebar";
// import { setSelectedID } from "@/Redux/slices/secondary/notes/table-row-ids";

const ProvidedCustomTable = ({ columns, rows = {}, More }) => {
  //   const [dialogState, setDialogState] = useState(false);

  const { open } = useSidebar();
  const { selectedIDs } = useSelector((state) => state.providedSelectedID);

  const { toogleAll, toogleSelect } = useTable(
    rows,
    selectedIDs,
    setSelectedID
  );

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
              <TableHead className="text-center text-nowrap" key={index}>
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
                    {row.note.title}
                  </DialogTrigger>
                  <PdfPreview url={row.note.url} />
                </Dialog>
              </TableCell>
              {/* {keys?.map((key, index) => (
                  <TableCell className="text-center" key={index}>
                    {row[key]?.name || }
                  </TableCell>
                ))} */}
              <TableCell className="text-center text-nowrap">{row.batch.name}</TableCell>
              <TableCell className="text-center text-nowrap">
                {row.batch.class.name}
              </TableCell>
              <TableCell className="text-center text-nowrap">{row.note.date}</TableCell>
              {/* <TableCell className="text-center">{note.class}</TableCell>
              <TableCell className="text-center">{note.posted_by}</TableCell>
              <TableCell className="text-center">{note.date}</TableCell> */}
              <TableCell className="text-center text-nowrap">
                <More data={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProvidedCustomTable;
