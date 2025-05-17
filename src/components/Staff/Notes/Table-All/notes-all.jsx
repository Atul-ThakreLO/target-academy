import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Search, Table, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterNotes from "../filter-notes";
// import EditDeleteDdown from "./edit-delete-ddown";
import { useDeleteManyNotes, useGetNotes } from "@/Hooks/use-notes";
import EditDeleteButtons from "./edit-delete-buttons";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { setNotesData } from "@/Redux/slices/secondary/notes/notes-data-slice";
import ProvideNotesDialog from "../Table-provided/provide-notes-dialog";
import { setNotesFilterData } from "@/Redux/slices/secondary/notes/notes-filter-data-slice";
import { setSelectedID } from "@/Redux/slices/secondary/notes/notes-id-slice";
import CustomTable from "./custom-table";
import CustomTableNP from "../../Notes-Papers-Utils/custom-table-n-p";
import NotesCellSkeleton from "@/components/Loaders/Staff/notes-cell-skeleton";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const NotesAll = () => {
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const { data, isLoading, isFetched, isError, error, refetch, isRefetching } =
    useGetNotes();
  const { data: notesData } = useSelector((state) => state.notesData);

  const dispatch = useDispatch();
  const { data: notesFilterData } = useSelector(
    (state) => state.notesFilterData
  );

  const { selectedIDs } = useSelector((state) => state.notesSelectedID);
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["notes"]);
    setOpen(false);
  }, [notesFilterData]);

  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  const searchedData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      dispatch(setNotesData(arrayData));
    }
  };

  useEffect(() => {
    searchedData();
  }, [isFetched, searchVal, notesFilterData, data?.data]);

  const mutation = useDeleteManyNotes();

  const handleDeleteMany = () => {
    let public_ids = [];
    notesData.map((data) => {
      if (selectedIDs.includes(data.id)) {
        public_ids.push(data.public_id);
      }
    });
    mutation.mutate({ ids: [...selectedIDs], public_ids });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setSelectedID([]));
    }
  }, [mutation.isSuccess, mutation.isPending]);

  return (
    <>
      <div className="mt-5 mb-5 flex justify-between items-center px-2 gap-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            value={searchVal}
            onChange={handleSearchInput}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="flex gap-2">
          {selectedIDs.length > 0 && (
            <>
              <Button variant="outline" onClick={handleDeleteMany}>
                {mutation.isPending ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    <Trash />{" "}
                    <span className="hidden md:block">Delete Selected</span>
                  </>
                )}
              </Button>
              <ProvideNotesDialog />
            </>
          )}
          <FilterNotes
            open={open}
            setOpen={setOpen}
            isRefetching={isRefetching}
            setFilterData={setNotesFilterData}
          />
        </div>
      </div>

      {!notesData ? (
        <NotesCellSkeleton />
      ) : !notesData.length > 0 ? (
        <p className="text-center">No Notes Found</p>
      ) : (
        <CustomTableNP
          columns={["Title", "Subject", "Class", "Posted-BY", "Date"]}
          rows={notesData}
          // keys={Object.keys(data.data[0]).slice(2)}
          keys={[
            "subject.name",
            "class.name",
            "officeStaff.OfficeStaffInfo.name",
            "date",
          ]}
          More={EditDeleteButtons}
          selectedIDs={selectedIDs}
          setSelectedID={setSelectedID}
          // papers
          // More={EditDeleteButtons}
        />
      )}
    </>
  );
};

export default NotesAll;
