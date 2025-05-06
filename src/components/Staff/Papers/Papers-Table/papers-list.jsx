import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
// import CustomTable from "@/components/Utils/Table/custom-table";
import { useDeleteManyPaper, useGetPapers } from "@/Hooks/use-papers";
import FilterNotes from "../../Notes/filter-notes";
import { setPapersFilterData } from "@/Redux/slices/secondary/papers/papers-filter-data-slice";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import EditDeleteButtons from "../Edit-Delete/edit-delete-buttons";
import CustomTableNP from "../../Notes-Papers-Utils/custom-table-n-p";
import { setSelectedID } from "@/Redux/slices/secondary/papers/papers-selected-id";

const PapersTable = () => {
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [papersData, setPapersData] = useState(null);
  const { data, isLoading, isRefetching, isFetched } = useGetPapers();

  const dispatch = useDispatch();
  const { data: papersFilterData } = useSelector(
    (state) => state.papersFilterData
  );

  const { selectedIDs } = useSelector((state) => state.papersSelectedID);

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["papers"]);
  }, [papersFilterData]);

  const searchPaper = () => {
    if (isFetched) {
      let papers = data?.data.filter((paper) =>
        paper.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setPapersData(papers);
    }
  };

  useEffect(
    () => searchPaper(),
    [isFetched, searchVal, papersFilterData, data?.data]
  );

  const mutation = useDeleteManyPaper();
  const handleDeleteMany = () => {
    console.log(selectedIDs);

    let public_ids = [];
    papersData.forEach((paper, i) => {
      if (selectedIDs.includes(paper.id)) {
        public_ids.push(paper.public_id);
      }
    });
    console.log(public_ids);
    mutation.mutate({ ids: [...selectedIDs], public_ids });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setSelectedID([]));
    }
  }, [mutation.isSuccess, mutation.isPaused]);

  console.log(papersData);

  return (
    <>
      <div className="mt-5 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div>
          {selectedIDs.length > 0 && (
            <Button
              variant="outline"
              onClick={handleDeleteMany}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <Loader className="animate-spin" />
              ) : (
                <>
                  <Trash /> Delete Selected
                </>
              )}
            </Button>
          )}
          {/* <FilterPapers /> */}
          <FilterNotes
            open={open}
            setOpen={setOpen}
            isRefetching={isRefetching}
            setFilterData={setPapersFilterData}
          />
        </div>
      </div>
      {/* <CustomTable
        columns={["Title", "Subject", "Class", "Test", "Date"]}
        rows={papers}
        keys={Object.keys(papers[0]).slice(2)}
        toogleActionButton={toogleDeleteButton}
        /> */}
      {!papersData ? (
        "Loading"
      ) : (
        <CustomTableNP
          columns={["Title", "Subject", "Class", "Posted-BY", "Date", "Test"]}
          rows={papersData}
          // keys={Object.keys(data.data[0]).slice(2)}
          keys={["subject.name", "class.name", "officeStaff.OfficeStaffInfo.name", "date"]}
          More={EditDeleteButtons}
          selectedIDs={selectedIDs}
          setSelectedID={setSelectedID}
          papers
          // More={EditDeleteButtons}
        />
      )}
    </>
  );
};

export default PapersTable;
