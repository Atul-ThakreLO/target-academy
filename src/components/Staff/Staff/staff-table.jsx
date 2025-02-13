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

const StaffTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Profile</TableHead>
          <TableHead className="text-center">Mobile</TableHead>
          <TableHead className="text-center">Qualification</TableHead>
          <TableHead className="text-center">Subjects</TableHead>
          <TableHead className="text-center">Higher Date</TableHead>
          <TableHead className="text-center">Role</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Teacher Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">Msc, Bsc, Bed</TableCell>
          <TableCell className="text-center">Chemistry, Science</TableCell>
          <TableCell className="text-center">28-01-2025</TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Teacher
              </span>
            </div>
          </TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-2 border rounded-full bg-red-500/50 mr-2">
                verified
              </span>
              <span className="px-2 border rounded-full bg-green-500/50">
                Admin
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Teacher Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">Msc, Bsc, Bed</TableCell>
          <TableCell className="text-center">Chemistry, Science</TableCell>
          <TableCell className="text-center">28-01-2025</TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Teacher
              </span>
            </div>
          </TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-2 border rounded-full bg-red-500/50 mr-2">
                verified
              </span>
              <span className="px-2 border rounded-full bg-green-500/50">
                Admin
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <TableProfile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"
              name={"Teacher Name"}
              email={"abcd@gmail.com"}
            />
          </TableCell>
          <TableCell className="text-center">1234567890</TableCell>
          <TableCell className="text-center">Msc, Bsc, Bed</TableCell>
          <TableCell className="text-center">Chemistry, Science</TableCell>
          <TableCell className="text-center">28-01-2025</TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                Teacher
              </span>
            </div>
          </TableCell>
          <TableCell>
            <div className="w-min mx-auto">
              <span className="px-2 border rounded-full bg-red-500/50 mr-2">
                verified
              </span>
              <span className="px-2 border rounded-full bg-green-500/50">
                Admin
              </span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default StaffTable;
