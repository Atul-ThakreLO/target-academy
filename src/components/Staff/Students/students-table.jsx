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
import { Loader2 } from "lucide-react";

const StudentsTable = ({ data }) => {
  console.log(data);
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
        {!data ? (
          <Loader2 />
        ) : (
          data.map((student) => (
            <TableRow>
              <TableCell>
                <TableProfile
                  src={student.StudentInfo.avtar_url}
                  name={student.StudentInfo.student_name}
                  email={student.email}
                />
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {student.StudentInfo.mobile}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {student.StudentInfo.class.name}
              </TableCell>
              <TableCell className="text-center">
                {student.StudentSubjects.map((subject) => (
                  <p>{subject.subject.name}</p>
                ))}
              </TableCell>
              <TableCell className="text-center text-nowrap">
                {student.StudentInfo.school.name}
              </TableCell>
              <TableCell>
                <div className="w-max mx-auto">
                  <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                    {student.StudentInfo.batches?.name ? student.StudentInfo.batches?.name : "Not Updated"}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default StudentsTable;
