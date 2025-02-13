import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Trash } from "lucide-react";
import React, { useState } from "react";
import CustomTable from "@/components/Utils/Table/custom-table";
import FilterPapers from "../Filter/filter-papers";
import EditDeleteDdown from "../Edit-Delete/edit-delete-ddown";

const PapersTable = () => {
  const papers = [
    {
      id: 1,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      test: "szdfwsergtsedcv bzxdfgertgsegv",
      date: "01-02-2025",
    },
    {
      id: 2,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      test: "xsdfvbsndf jdhqakuwey437qwhdbaj",
      date: "01-02-2025",
    },
    {
      id: 3,
      title: "nvj$$EWV JY*&^*%$ZIU LOIU$^%R^",
      subject: "Chemistry",
      class: "12th",
      test: "xsdfvbsndf jdhqakuwey437qwhdbaj",
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
                <span className="">Filter Papers</span>
              </Button>
            </DialogTrigger>
            <FilterPapers />
          </Dialog>
        </div>
      </div>
      <CustomTable
        columns={["Title", "Subject", "Class", "Test", "Date"]}
        rows={papers}
        keys={Object.keys(papers[0]).slice(2)}
        More={EditDeleteDdown}
        toogleActionButton={toogleDeleteButton}
      />
    </>
  );
};

export default PapersTable;
