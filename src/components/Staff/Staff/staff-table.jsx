import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from "react";
import TableProfile from "@/components/Utils/Staff-Main/table-profile";
import { useGetAllStaff } from "@/Hooks/use-staff";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import StaffProfileSheet from "../Profile/staff-profile-sheet";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import StaffCellSkeleton from "@/components/Loaders/Staff/staff-cell-skeleton";

const StaffTable = ({ data }) => {
  // useEffect(() => {
  //   if (data?.data) console.log(data.data);
  // }, [data, isLoading]);

  const { staff } = useSelector((state) => state.authStaff);
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
        {!data ? (
          Array.from({ length: 10 }, (_, i) => <StaffCellSkeleton key={i} />)
        ) : !data.length >= 1 ? (
          <TableRow>
            <TableCell colSpan={7}>
              <p className="text-center">No staff Found</p>
            </TableCell>
          </TableRow>
        ) : (
          data.map((row) =>
            staff.id === row.id ? (
              ""
            ) : (
              <TableRow>
                {staff.OfficeStaffInfo.isAdmin ? (
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" className="text-start">
                          <TableProfile
                            src={row.OfficeStaffInfo.avtar_url}
                            name={row.OfficeStaffInfo.name}
                            email={row.email}
                          />
                        </Button>
                      </SheetTrigger>
                      <StaffProfileSheet data={row} />
                    </Sheet>
                  </TableCell>
                ) : (
                  <TableCell>
                    <TableProfile
                      src={row.OfficeStaffInfo.avtar_url}
                      name={row.OfficeStaffInfo.name}
                      email={row.email}
                    />
                  </TableCell>
                )}

                <TableCell className="text-center">
                  {row.OfficeStaffInfo.mobile}
                </TableCell>
                <TableCell className="text-center">
                  {row.OfficeStaffInfo.qualification}Bed
                </TableCell>
                <TableCell className="text-center">
                  {row.OfficeStaffInfo.subjects} Science
                </TableCell>
                <TableCell className="text-center">
                  {row.OfficeStaffInfo.hire_date}
                </TableCell>
                <TableCell>
                  <div className="w-min mx-auto">
                    <span className="px-3 py-1 bg-blue-400/40 rounded-sm">
                      {row.OfficeStaffInfo.role}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-min mx-auto">
                    <span className="px-2 border rounded-full bg-red-500/50 mr-2">
                      {row.OfficeStaffInfo.isVerified
                        ? "Verified"
                        : "UnVerified"}
                    </span>
                    <span className="px-2 border rounded-full bg-green-500/50">
                      {row.OfficeStaffInfo.isAdmin ? "Admin" : "Staff"}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            )
          )
        )}
      </TableBody>
    </Table>
  );
};

export default StaffTable;
