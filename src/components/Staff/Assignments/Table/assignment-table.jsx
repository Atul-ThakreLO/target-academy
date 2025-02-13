import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Filter, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import EditUnprovideDdown from "../../Notes/Table-provided/edit-unprovide-ddown";
import useTable from "@/components/Utils/Table/useTable";
import AssignmentFilter from "../Filter/assignment-filter";
import EditDeleteDdown from "../Edit-Delete/edit-delete-ddown";
import SheetAssignment from "../Sheet/sheet-assignment";

const AssignmentTable = () => {
  const notes = [
    {
      id: 1,
      title: "asbcasdkeuancs",
      batch: "Batch-1",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
    {
      id: 2,
      title: "asbcasdkeuancs",
      batch: "Batch-3",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
    {
      id: 3,
      title: "asbcasdkeuancs",
      batch: "Batch-2",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
  ];

  const [deleteButton, setDeleteButton] = useState(false);

  const { selectedIds, toogleAll, toogleSelect } = useTable(notes);

  useEffect(() => {
    if (selectedIds.length > 0) {
      setDeleteButton(true);
    } else {
      setDeleteButton(false);
    }
  }, [selectedIds]);

  return (
    <div>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input type="search" className="w-96 pl-12 border-2" />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div>
          {deleteButton && (
            <Button variant="destructive">
              <Trash /> Delete Selected
            </Button>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" type="button">
                <Filter size={18} />
                <span className="">Filter Assignments</span>
              </Button>
            </DialogTrigger>
            <AssignmentFilter />
          </Dialog>
        </div>
      </div>
      <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-r">
                <Checkbox
                  checked={selectedIds.length === notes.length}
                  onCheckedChange={() => toogleAll()}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-center">Batch</TableHead>
              <TableHead className="text-center">Class</TableHead>
              <TableHead className="text-center">Posted-by</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((note) => (
              <TableRow>
                <TableCell className="border-r">
                  <Checkbox
                    checked={selectedIds.includes(note.id)}
                    onCheckedChange={() => toogleSelect(note.id)}
                  />
                </TableCell>
                <TableCell><SheetAssignment id={note.id} title={note.title} /></TableCell>
                <TableCell className="text-center">
                  <span className="bg-green-500/50 px-2 py-1 rounded-sm">
                    {note.batch}
                  </span>
                </TableCell>
                <TableCell className="text-center">{note.class}</TableCell>
                <TableCell className="text-center">{note.posted_by}</TableCell>
                <TableCell className="text-center">{note.date}</TableCell>
                <TableCell className="text-center">
                  <EditDeleteDdown id={note.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AssignmentTable;
