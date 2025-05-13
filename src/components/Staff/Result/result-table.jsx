import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useTable from "@/components/Utils/Table/useTable";
import { useDeleteManyResult, useGetStudents } from "@/Hooks/use-result";
import { setSelectedID } from "@/Redux/slices/secondary/result/result-id-slice";
import { Loader2, Search, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarksCell from "./marks-row";
import { useSidebar } from "@/components/ui/sidebar";
import ResultCellSkeleton from "@/components/Loaders/Staff/result-cell-skeleton";

const ResultTable = ({ query }) => {
  const [searchVal, setSearchVal] = useState("");
  const [resultsData, setResultsData] = useState(null);
  const { selectedIDs } = useSelector((state) => state.resultSelectedID);
  const { open } = useSidebar();

  const { data, isLoading, isSuccess, refetch } = useGetStudents(query);

  const { toogleAll, toogleSelect } = useTable(
    data?.data,
    selectedIDs,
    setSelectedID
  );

  useEffect(() => {
    if (isSuccess) {
      console.log(data?.data);
    }
  }, [isSuccess, isLoading]);

  const mutation = useDeleteManyResult(refetch);

  const handleDelete = () => {
    console.log({ ids: selectedIDs });
    mutation.mutate({ ids: selectedIDs });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (mutation.isSuccess) {
      dispatch(setSelectedID([]));
    }
  }, [mutation.isPending, mutation.isSuccess]);

  const searchResult = () => {
    if (isSuccess) {
      let results = data?.data.filter((result) =>
        result.StudentInfo.student_name
          .toLowerCase()
          .includes(searchVal.toLowerCase())
      );
      setResultsData(results);
    }
  };

  useEffect(() => searchResult(), [isSuccess, searchVal, data?.data]);

  return (
    <>
      <div className="mt-5 flex justify-between">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        {selectedIDs.length > 0 ? (
          <Button
            variant="outline"
            disabled={mutation.isPending}
            onClick={handleDelete}
          >
            {mutation.isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              <>
                <Trash /> Delete Selected
              </>
            )}
          </Button>
        ) : (
          ""
        )}
      </div>
      <div
        className={`border rounded-xl mt-5  mx-auto ${
          open ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                {/* <Checkbox
                  checked={selectedIDs.length === data?.data?.length}
                  onCheckedChange={() => toogleAll()}
                /> */}
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>SubjectS</TableHead>
              <TableHead>Total %</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <ResultCellSkeleton />
            ) : !resultsData?.length > 0 ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <p className="text-center text-lg font-medium my-5">Not Fetched, or Matched</p>
                </TableCell>
              </TableRow>
            ) : (
              resultsData.map((student) => (
                <MarksCell
                  student={student}
                  refetch={refetch}
                  toogleSelect={toogleSelect}
                  selectedIDs={selectedIDs}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ResultTable;
