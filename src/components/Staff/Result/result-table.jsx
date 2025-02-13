import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useTable from "@/components/Utils/Table/useTable";
import React from "react";

const ResultTable = () => {
  const rows = [
    {
      id: 1,
      name: "Student Name",
      mark1: 89,
      mark2: 89,
      mark3: 89,
      mark4: 89,
      total: 87,
    },
    {
      id: 2,
      name: "Student Name",
      mark1: 89,
      mark2: 89,
      mark3: 89,
      mark4: 89,
      total: 87,
    },
    {
      id: 3,
      name: "Student Name",
      mark1: 89,
      mark2: 89,
      mark3: 89,
      mark4: 89,
      total: 87,
    },
    {
      id: 4,
      name: "Student Name",
      mark1: 89,
      mark2: 89,
      mark3: 89,
      mark4: 89,
      total: 87,
    },
  ];
  const { selectedIds, toogleAll, toogleSelect } = useTable(rows);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox
                checked={selectedIds.length === rows.length}
                onCheckedChange={() => toogleAll()}
              />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Subject-1</TableHead>
            <TableHead>Subject-2</TableHead>
            <TableHead>Subject-3</TableHead>
            <TableHead>Subject-4</TableHead>
            <TableHead>SSSS%</TableHead>
            <TableHead>Total %</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>
              <Input />
            </TableCell>
            <TableCell>90%</TableCell>
            <TableCell>
              <Input />
            </TableCell>
          </TableRow>

          {rows.map((row) => (
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={selectedIds.includes(row.id)}
                  onCheckedChange={() => toogleSelect(row.id)}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mark1}</TableCell>
              <TableCell>{row.mark2}</TableCell>
              <TableCell>{row.mark3}</TableCell>
              <TableCell>{row.mark4}</TableCell>
              <TableCell>""</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Button>Submit</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default ResultTable;
