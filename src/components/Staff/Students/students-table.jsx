import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import TableProfile from "@/components/Utils/Staff-Main/table-profile";

const StudentsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Profile</TableHead>
          <TableHead className="text-center">Mobile</TableHead>
          <TableHead className="text-center">Class</TableHead>
          <TableHead className="text-center">Subjects</TableHead>
          <TableHead className="text-center">School</TableHead>
          <TableHead className="text-center">Batch</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Student Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">12th</TableCell>
          <TableCell className="text-center">
            Chemistry, Physics, Maths, Biology
          </TableCell>
          <TableCell className="text-center">Ashok Vidyalaya</TableCell>
          <TableCell>
            <div className="w-max mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Batch-1
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Student Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">12th</TableCell>
          <TableCell className="text-center">
            Chemistry, Physics, Maths, Biology
          </TableCell>
          <TableCell className="text-center">Ashok Vidyalaya</TableCell>
          <TableCell>
            <div className="w-max mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Batch-1
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Student Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">12th</TableCell>
          <TableCell className="text-center">
            Chemistry, Physics, Maths, Biology
          </TableCell>
          <TableCell className="text-center">Ashok Vidyalaya</TableCell>
          <TableCell>
            <div className="w-max mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Batch-1
              </span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StudentsTable;
