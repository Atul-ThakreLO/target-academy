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
import StudentCellSkeleton from "@/components/Loaders/Staff/student-cell-skeleton";

const StudentsTable = ({ data }) => {
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
          Array.from({ length: 10 }, (_, i) => <StudentCellSkeleton key={i} />)
        ) : !data.length > 1 ? (
          <TableRow>
            <TableCell colSpan={6}>
              <p className="text-center">No Student Found</p>
            </TableCell>
          </TableRow>
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
                    {student.StudentInfo.batches?.name
                      ? student.StudentInfo.batches?.name
                      : "Not Updated"}
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
