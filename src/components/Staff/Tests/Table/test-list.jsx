import React, { useState } from "react";
import TsetListTable from "./tset-list-table";
import { Input } from "@/components/ui/input";
import { Filter, Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FilterPapers from "../../Papers/Filter/filter-papers";

const TestList = () => {
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
      <TsetListTable toogleActionButton={toogleDeleteButton} />
    </>
  );
};

export default TestList;
