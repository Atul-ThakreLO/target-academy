import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useTable from "@/components/Utils/Table/useTable";
import { TransitionLink } from "@/components/Utils/transition-link";
import React, { useEffect } from "react";

const TsetListTable = ({ toogleActionButton }) => {
  const columns = ["Title", "Subject", "Class", "Batch", "Posted-by", "Date"];
  const rows = [
    {
      id: 1,
      title: "Test-1",
      subjec: "Subject-1",
      class: "12th",
      batch: "Batch-1",
      posted_by: "Teacher Name",
      date: "01-01-2025",
    },
    {
      id: 2,
      title: "Test-2",
      subjec: "Subject-2",
      class: "12th",
      batch: "Batch-1",
      posted_by: "Teacher Name",
      date: "01-01-2025",
    },
    {
      id: 3,
      title: "Test-3",
      subjec: "Subject-3",
      class: "12th",
      batch: "Batch-1",
      posted_by: "Teacher Name",
      date: "01-01-2025",
    },
  ];

  const keys = Object.keys(rows[0]).slice(2);
  const { selectedIds, toogleAll, toogleSelect } = useTable(rows);

  useEffect(() => {
    if (selectedIds.length > 0) {
      toogleActionButton(true);
    } else {
      toogleActionButton(false);
    }
  }, [selectedIds]);

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
                <TransitionLink href={`marks/${note.id}`}>
                  {note.title}
                </TransitionLink>
              </TableCell>
              {keys.map((key, index) => (
                <TableCell className="text-center" key={index}>
                  {note[key]}
                </TableCell>
              ))}
              <TableCell className="text-center">
                {/* <More id={note.id} /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TsetListTable;
