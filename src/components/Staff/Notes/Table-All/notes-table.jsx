import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterNotes from "../filter-notes";
import EditDeleteDdown from "./edit-delete-ddown";
import CustomTable from "@/components/Utils/Table/custom-table";

const NotesTable = () => {
  const notes = [
    {
      id: 1,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
    {
      id: 2,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
    {
      id: 3,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      posted_by: "Teacher Name",
      date: "01-02-2025",
    },
  ];

  const [deleteButton, setDeleteButton] = useState(false);

  const toogleDeleteButton = (value) => {
    setDeleteButton(value);
  };

  return (
    <>
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
                <span className="">Filter Notes</span>
              </Button>
            </DialogTrigger>
            <FilterNotes />
          </Dialog>
        </div>
      </div>

      <CustomTable
        columns={["Title", "Subject", "Class", "Posted-BY", "Date"]}
        rows={notes}
        keys={Object.keys(notes[0]).slice(2)}
        More={EditDeleteDdown}
        toogleActionButton={toogleDeleteButton}
      />
      {/* <div className="border rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-r">
                <Checkbox
                  checked={selectedIds.length === notes.length}
                  onCheckedChange={() => toogleAll()}
                />
              </TableHead>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Subject</TableHead>
              <TableHead className="text-center">Class</TableHead>
              <TableHead className="text-center">Posted-By</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell className="border-r">
                  <Checkbox
                    checked={selectedIds.includes(note.id)}
                    onCheckedChange={() => toogleSelect(note.id)}
                  />
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger className="hover:text-blue-500">
                      {note.title}
                    </DialogTrigger>
                    <PdfPreview />
                  </Dialog>
                </TableCell>
                <TableCell className="text-center">{note.subject}</TableCell>
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
      </div> */}
    </>
  );
};

export default NotesTable;
