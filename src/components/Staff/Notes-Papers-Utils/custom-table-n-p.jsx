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
import { useDispatch } from "react-redux";
import useTable from "@/components/Utils/Table/useTable";
import { TransitionLink } from "@/components/Utils/transition-link";
import { useSidebar } from "@/components/ui/sidebar";
import { formatDate } from "@/components/Utils/Date Formater/formatDate";
// import { setSelectedID } from "@/Redux/slices/secondary/notes/notes-id-slice";

const CustomTableNP = ({
  columns,
  rows = {},
  keys,
  More,
  selectedIDs,
  setSelectedID,
  papers,
}) => {
  //   const [dialogState, setDialogState] = useState(false);
  //   const { selectedIDs } = useSelector((state) => state.notesSelectedID);

  const { open } = useSidebar();
  const { toogleAll, toogleSelect } = useTable(
    rows,
    selectedIDs,
    setSelectedID
  );
  const dispatch = useDispatch();

  function getValue(key, row) {
    // let data = row;
    // key.split(".").reduce((curr, prev) => data = data?.[curr]);
    // return data
    if (!row || !key) return null;

    // Handle both dot notation strings and already-split arrays
    const keys = typeof key === "string" ? key.split(".") : key;

    // Reduce through the keys to get the nested value
    if(key === "date") {
      return formatDate(row[key])
    }
    return keys.reduce((acc, key) => {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, row);
  }

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
                  {getValue(key, row)}
                </TableCell>
              ))}
              {papers ? (
                row?.test?.title ? (
                  <TableCell className="text-center text-nowrap">
                    <TransitionLink href={`/staff/tests/marks/${row?.test_id}`}>
                      {row?.test?.title}
                    </TransitionLink>
                  </TableCell>
                ) : (
                  <TableCell className="text-center">--:--</TableCell>
                )
              ) : (
                ""
              )}
              {row.test_id ? (
                ""
              ) : (
                <TableCell className="text-center">
                  <More data={row} />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTableNP;
