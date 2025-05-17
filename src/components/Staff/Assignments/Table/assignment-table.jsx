import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import useTable from "@/components/Utils/Table/useTable";
import SheetAssignment from "../Sheet/sheet-assignment";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedID } from "@/Redux/slices/secondary/assignment/assignment-id-slice";
import FilterNotes from "../../Notes/filter-notes";
import { setAssignmentData } from "@/Redux/slices/secondary/assignment/assignment-data-slice";
import {
  useDeleteAssignment,
  useGetAssignments,
  useUpdateAssignmentData,
} from "@/Hooks/use-assignment";
import { setAssignmentFilterData } from "@/Redux/slices/secondary/assignment/assignment-filter-data-slice";
import { useQueryClient } from "@tanstack/react-query";
import EditDeleteOptions from "../Edit-Delete/edit-delete-options";
import { useSidebar } from "@/components/ui/sidebar";
import NotesCellSkeleton from "@/components/Loaders/Staff/notes-cell-skeleton";
import AssignmentCellSkeleton from "@/components/Loaders/Staff/assignment-cell-skeleton";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { formatDate } from "@/components/Utils/Date Formater/formatDate";

const AssignmentTable = () => {
  const [searchedData, setSearchedData] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [deleteButton, setDeleteButton] = useState(false);
  const { selectedIDs } = useSelector((state) => state.assignmentSelectedID);
  const { data } = useSelector((state) => state.assignmentData);
  const { data: filteredData } = useSelector(
    (state) => state.assignmentFilterData
  );

  const { open: sidebarOpen } = useSidebar();

  const { toogleAll, toogleSelect } = useTable(
    data,
    selectedIDs,
    setSelectedID
  );

  const dispatch = useDispatch();
  const {
    data: fetchedData,
    isLoading,
    isFetched,
    isRefetching,
  } = useGetAssignments();

  const deleteMutation = useDeleteAssignment();
  const editMutation = useUpdateAssignmentData();

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["assignments"]);
    setOpen(false);
  }, [filteredData]);

  useEffect(() => {
    if (isFetched) {
      dispatch(setAssignmentData(fetchedData?.data));
    }
  }, [isLoading, isFetched, fetchedData?.data]);

  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  const searchedFilter = () => {
    if (isFetched) {
      let arrayData = fetchedData?.data.filter((val) =>
        val?.title?.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedData(arrayData);
    }
  };

  useEffect(() => {
    searchedFilter();
  }, [isFetched, searchVal, filteredData, fetchedData?.data]);

  useEffect(() => {
    if (selectedIDs.length > 0) {
      setDeleteButton(true);
    } else {
      setDeleteButton(false);
    }
  }, [selectedIDs]);

  return (
    <div>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            onChange={handleSearchInput}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="flex gap-3">
          {deleteButton && (
            <Button variant="outline">
              <Trash />{" "}
              <span className="hidden md:block w-min">Delete Selected</span>
            </Button>
          )}
          <FilterNotes
            open={open}
            setOpen={setOpen}
            isRefetching={isRefetching}
            provided
            setFilterData={setAssignmentFilterData}
          />
        </div>
      </div>
      <div
        className={`border rounded-xl mx-auto ${
          sidebarOpen ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="border-r pr-2">
                <Checkbox
                  checked={selectedIDs.length === data?.length}
                  onCheckedChange={() => toogleAll()}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-center">PDF</TableHead>
              <TableHead className="text-center">Batch</TableHead>
              <TableHead className="text-center">Class</TableHead>
              <TableHead className="text-center">Subject</TableHead>
              <TableHead className="text-center">Posted-by</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!searchedData ? (
              Array.from({ length: 10 }, (_, i) => (
                <AssignmentCellSkeleton key={i} />
              ))
            ) : !searchedData.length > 0 ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <p className="text-center">No staff Found</p>
                </TableCell>
              </TableRow>
            ) : (
              searchedData?.map((assi) => (
                <TableRow>
                  <TableCell className="border-r [&:has([role=checkbox])]:pr-4">
                    <Checkbox
                      checked={selectedIDs.includes(assi.id)}
                      onCheckedChange={() => toogleSelect(assi.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <SheetAssignment data={assi} />
                  </TableCell>
                  <TableCell>
                    <Dialog
                    //  open={dialogState} onOpenChange={handleDialog}
                    >
                      <DialogTrigger className="hover:text-blue-500">
                        View
                      </DialogTrigger>
                      <PdfPreview url={assi.pdf_url} />
                    </Dialog>
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    <span className="bg-green-500/50 px-2 py-1 rounded-sm">
                      {assi.batch.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    {assi.class.name}
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    {assi.subject.name}
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    {assi.staff.OfficeStaffInfo.name}
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    {formatDate(assi.date)}
                  </TableCell>
                  <TableCell className="text-center text-nowrap">
                    <EditDeleteOptions
                      data={assi}
                      deleteMutation={deleteMutation}
                      editMutation={editMutation}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AssignmentTable;
