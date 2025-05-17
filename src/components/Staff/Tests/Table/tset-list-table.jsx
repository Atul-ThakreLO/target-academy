import { Checkbox } from "@/components/ui/checkbox";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/components/Utils/Date Formater/formatDate";
import useTable from "@/components/Utils/Table/useTable";
import { TransitionLink } from "@/components/Utils/transition-link";
import { setSelectedID } from "@/Redux/slices/secondary/test-papers/test-papers-id-slice";
import React from "react";
import { useSelector } from "react-redux";
// import EditDeleteOptions from "../../Assignments/Edit-Delete/edit-delete-options";
import { useUpdateTestPaper } from "@/Hooks/use-test-paper";
import EditDeleteOptions from "../Edit Delete/edit-delete-options";

const TsetListTable = ({ rows, more }) => {
  const columns = ["Title", "Subject", "Class", "Batch", "Posted-by", "Date"];

  const { open } = useSidebar();

  const editMutation = useUpdateTestPaper()

  const { selectedIDs } = useSelector((state) => state.testPaperSelectedID);
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
                checked={selectedIDs.length === rows.length}
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="border-r  [&:has([role=checkbox])]:pr-4">
                <Checkbox
                  checked={selectedIDs.includes(row.id)}
                  onCheckedChange={() => toogleSelect(row.id)}
                />
              </TableCell>
              <TableCell>
                <TransitionLink
                  href={`marks/${row.id}`}
                  className="text-nowrap"
                >
                  {row.title}
                </TransitionLink>
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {row.subject.name}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {row.class.name}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {row.batch.name}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {row.officeStaff?.OfficeStaffInfo?.name}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {formatDate(row.date)}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {/* <More id={note.id} /> */}
                <EditDeleteOptions data={row} editMutation={editMutation} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TsetListTable;
