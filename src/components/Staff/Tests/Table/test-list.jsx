import React, { useEffect, useState } from "react";
import TsetListTable from "./tset-list-table";
import { Input } from "@/components/ui/input";
import { Search, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetTestPapers } from "@/Hooks/use-test-paper";
import FilterNotes from "../../Notes/filter-notes";
import { useSelector } from "react-redux";
import { setTestsFilterData } from "@/Redux/slices/secondary/test-papers/tests-filter-data-slice";
import { useQueryClient } from "@tanstack/react-query";

const TestList = () => {
  const [searchedData, setSearchedData] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const { selectedIDs } = useSelector((state) => state.testPaperSelectedID);
  const { data: filteredData } = useSelector((state) => state.testsFilterData);

  const { data, isLoading, isFetched, isRefetching } = useGetTestPapers();

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["notes"]);
    setOpen(false);
  }, [filteredData]);

  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  const searchedFilter = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedData(arrayData);
    }
  };

  useEffect(() => {
    searchedFilter();
  }, [isFetched, searchVal, filteredData, data?.data]);

  // const mutation = useDeleteManyNotes();

  // const handleDeleteMany = () => {
  //   let public_ids = [];
  //   notesData.map((data) => {
  //     if (selectedIDs.includes(data.id)) {
  //       public_ids.push(data.public_id);
  //     }
  //   });
  //   mutation.mutate({ ids: [...selectedIDs], public_ids });
  // };

  // useEffect(() => {
  //   if (mutation.isSuccess) {
  //     dispatch(setSelectedID([]));
  //   }
  // }, [mutation.isSuccess, mutation.isPending]);

  return (
    <>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 s:mpl-12 border-2"
            onChange={handleSearchInput}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div>
          {selectedIDs.length > 0 && (
            <Button variant="outline">
              <Trash /> Delete Selected
            </Button>
          )}

          <FilterNotes
            open={open}
            setOpen={setOpen}
            isRefetching={isRefetching}
            provided
            setFilterData={setTestsFilterData}
          />
        </div>
      </div>
      {!searchedData ? "Loading..." : <TsetListTable rows={searchedData} />}
    </>
  );
};

export default TestList;
