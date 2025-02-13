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
import EditUnprovideDdown from "./edit-unprovide-ddown";
import FilterNotes from "../filter-notes";
import CustomTable from "@/components/Utils/Table/custom-table";

const NotesTableProvided = () => {
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

  const [unprovideButton, setUnprovideButton] = useState(false);

  const toogleUnProvideButton = (value) => {
    setUnprovideButton(value);
  };

  return (
    <>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input type="search" className="w-96 pl-12 border-2" />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div>
          {unprovideButton && (
            <Button variant="destructive">
              <Trash /> UnProvide Selected
            </Button>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" type="button">
                <Filter size={18} />
                <span className="">Filter Notes</span>
              </Button>
            </DialogTrigger>
            <FilterNotes />
          </Dialog>
        </div>
      </div>
      <CustomTable
        columns={["Title", "Batch", "Class", "Posted BY", "Date"]}
        rows={notes}
        keys={Object.keys(notes[0]).slice(2)}
        More={EditUnprovideDdown}
        toogleActionButton={toogleUnProvideButton}
      />
      {/* <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-r">
                <Checkbox
                  checked={selectedIDs.length === notes.length}
                  onCheckedChange={() => toogleSelectALL()}
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
                    checked={selectedIDs.includes(note.id)}
                    onCheckedChange={() => toogleSelection(note.id)}
                  />
                </TableCell>
                <TableCell>{note.title}</TableCell>
                <TableCell className="text-center">
                  <span className="bg-green-500/50 px-2 py-1 rounded-sm">
                    {note.batch}
                  </span>
                </TableCell>
                <TableCell className="text-center">{note.class}</TableCell>
                <TableCell className="text-center">{note.posted_by}</TableCell>
                <TableCell className="text-center">{note.date}</TableCell>
                <TableCell className="text-center">
                  <EditUnprovideDdown id={note.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> */}
    </>
  );
};

export default NotesTableProvided;
