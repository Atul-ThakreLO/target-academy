import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterNotes from "../filter-notes";
import { useGetProvidedNotes, useUnProvideManyNotes } from "@/Hooks/use-notes";
import { useDispatch, useSelector } from "react-redux";
import EditUnprovideOptions from "./More Options/edit-unprovide-options";
import { useQueryClient } from "@tanstack/react-query";
import { setProvidedNotesFilterData } from "@/Redux/slices/secondary/notes/provided-notes-filter-data";
import ProvidedCustomTable from "./provided-custom-table";
import { setSelectedID } from "@/Redux/slices/secondary/notes/provided-selected-id-slice";
import NotesCellSkeleton from "@/components/Loaders/Staff/notes-cell-skeleton";

const NotesProvided = () => {
  const [searchedData, setSearchedData] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [open, setOpen] = useState(false);

  const { selectedIDs } = useSelector((state) => state.providedSelectedID);
  const { data: notesFilterData } = useSelector(
    (state) => state.providednotesFilterData
  );

  const { data, isLoading, isFetched, isRefetching } = useGetProvidedNotes();
  const mutation = useUnProvideManyNotes();

  const queryClient = useQueryClient();
  useEffect(() => {
    console.log("filter", notesFilterData);
    queryClient.invalidateQueries(["provide", "notes"]);
    setOpen(false);
  }, [notesFilterData]);

  const filterData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.note.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedData(arrayData);
      console.log(arrayData);
    }
  };

  useEffect(() => {
    filterData();
  }, [isFetched, searchVal, notesFilterData, data?.data]);

  const handleSearchInput = (e) => {
    console.log(e.target.value);
    setSearchVal(e.target.value);
  };

  const handleUnprovideMany = () => {
    mutation.mutate({ ids: selectedIDs });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setSelectedID());
    }
  }, [mutation.isSuccess, mutation.isPending]);

  // useEffect(() => {
  //   dispatch(setSelectedID([]));
  //   dispatch(setNotesFilterData(null));
  //   return () => {
  //     dispatch(setNotesFilterData(null));
  //     dispatch(setSelectedID([]));
  //   };
  // }, []);

  return (
    <>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            value={searchVal}
            onChange={handleSearchInput}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div>
          {selectedIDs?.length > 0 && (
            <Button variant="ghost" onClick={handleUnprovideMany}>
              <Trash /> UnProvide Selected
            </Button>
          )}
          <FilterNotes
            open={open}
            setOpen={setOpen}
            isRefetching={isRefetching}
            setFilterData={setProvidedNotesFilterData}
            provided
          />
        </div>
      </div>
      {!searchedData ? (
        <NotesCellSkeleton />
      ) : !searchedData.length > 0 ? (
        <p className="text-center">No Notes Found</p>
      ) : (
        <ProvidedCustomTable
          columns={["Title", "Batch", "Class", "Date"]}
          rows={searchedData}
          keys={["batch", "note"]}
          More={EditUnprovideOptions}
        />
      )}
    </>
  );
};

export default NotesProvided;
