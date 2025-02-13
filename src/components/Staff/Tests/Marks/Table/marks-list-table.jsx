import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Search } from "lucide-react";
import React, { useState } from "react";

const MarksListTable = () => {
  const [outOff, setOutOff] = useState(null);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(0);

  function handleOutOff(e) {
    e.preventDefault();
    console.log();
    setOutOff(e.target.total.value);
    setValue(e.target.total.value);
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="relative">
          <Input type="search" className="w-96 pl-12 border-2" />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="flex gap-3">
          {outOff && !edit ? (
            <div className="pl-3 border rounded-lg flex items-center">
              <b>OutOff:</b> <span className="px-4">{outOff}</span>
              <div className="border-l">
                <Button variant="ghost" onClick={handleEdit}>
                  Edit
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleOutOff} className="flex gap-3">
                <Input
                  type="number"
                  name="total"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="outline">Add total</Button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="border rounded-xl overflow-hidden mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead>Toatal Marks</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>
                <Input type="number" name="mark" className="w-24" />
              </TableCell>
              <TableCell>{outOff ? outOff : "null"}</TableCell>
              <TableCell>
                <Button variant="ghost">
                  <Edit /> Edit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarksListTable;
