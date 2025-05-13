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
import { useGetMarks } from "@/Hooks/use-marks";
import { Loader, Loader2, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MarksRow from "./marks-row";
import { useDispatch } from "react-redux";
import { setTopper } from "@/Redux/slices/secondary/test-papers/topper-profile";
import { useSidebar } from "@/components/ui/sidebar";
import { useAddUpdateTotalMarks } from "@/Hooks/use-test-paper";
import TestMarksCellSkeleton from "@/components/Loaders/Staff/test-marks-cell-skeleton";

const MarksListTable = ({ id, totalMarks }) => {
  const [edit, setEdit] = useState(false);
  const [totalMarksValue, setTotalMarksValue] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchData] = useState(null);
  // const [topper, setTopper] = useState({});
  const { open } = useSidebar();

  const { data, isFetched, isSuccess, isLoading } = useGetMarks(id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      // marks: "",
      // student_id: "",
      test_paper_id: id,
    },
  });

  // useEffect(() => {
  //   if (isFetched) {
  //     console.log(data.data);
  //   }
  // }, [isLoading, isFetched]);
  const mutation = useAddUpdateTotalMarks();

  function handleOutOff(e) {
    e.preventDefault();
    setTotalMarksValue(e.target.total.value);
    mutation.mutate({ testID: id, totalMarks: e.target.total.value });
    setEdit(false);
  }

  function handleEdit() {
    setEdit((prev) => !prev);
  }

  const handleSearchVal = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchData = () => {
    const sData = data?.data.filter((s) =>
      s.StudentInfo.student_name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSearchData(sData);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTopper({}));
  }, []);
  const getTopper = () => {
    data?.data.forEach((s) => {
      if (s.TestPaperStudents[0]?.marks) {
        let max = 0;
        max = Math.max(max, s.TestPaperStudents[0]?.marks);
        if ((max = s.TestPaperStudents[0]?.marks)) {
          dispatch(setTopper(s));
        }
      }
    });
  };

  useEffect(() => {
    handleSearchData();
    getTopper();
  }, [searchVal, isLoading, isSuccess, isFetched]);

  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            onChange={handleSearchVal}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <p>{totalMarks}</p>
        <div className="flex gap-3">
          {totalMarks && !edit ? (
            <div className="pl-3 border rounded-lg flex items-center">
              <b>OutOff:</b> <span className="px-4">{totalMarks}</span>
              <div className="border-l">
                <Button variant="ghost" onClick={handleEdit}>
                  Edit
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleOutOff} className="flex gap-3">
                <Input
                  type="number"
                  name="total"
                  value={totalMarksValue || totalMarks}
                  onChange={(e) => setTotalMarksValue(e.target.value)}
                />
                <Button variant="outline">
                  {mutation.isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Add total"
                  )}
                </Button>
                {!edit ? (
                  ""
                ) : (
                  <Button variant="ghost" onClick={handleEdit}>
                    <X />
                  </Button>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
      <div
        className={`border rounded-xl mt-5  mx-auto ${
          open ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Marks</TableHead>
              <TableHead className="text-nowrap">Toatal Marks</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }, (_, i) => <TestMarksCellSkeleton key={i} />)
            ) : !searchedData?.length > 0 ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <p className="text-center">No Marks given Found</p>
                </TableCell>
              </TableRow>
            ) : (
              searchedData?.map((student, index) => (
                <MarksRow
                  student={student}
                  testId={id}
                  key={index}
                  totalMarks={totalMarks}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarksListTable;
