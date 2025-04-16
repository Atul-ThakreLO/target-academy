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
import { useAddMarksByTest, useGetMarks } from "@/Hooks/use-marks";
import { Edit, Loader, Save, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MarksRow from "./marks-row";
import { useDispatch } from "react-redux";
import { setTopper } from "@/Redux/slices/secondary/test-papers/topper-profile";
import { useSidebar } from "@/components/ui/sidebar";

const MarksListTable = ({ id }) => {
  const [outOff, setOutOff] = useState(null);
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(0);
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

  useEffect(() => {
    if (isFetched) {
      console.log(data.data);
    }
  }, [isLoading, isFetched]);

  function handleOutOff(e) {
    e.preventDefault();
    setOutOff(e.target.total.value);
    setValue(e.target.total.value);
    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
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
        <div className="flex gap-3">
          {outOff && !edit ? (
            <div className="pl-3 border rounded-lg flex items-center">
              <b>OutOff:</b> <span className="px-4">{outOff}</span>
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
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="outline">Add total</Button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className={`border rounded-xl mt-5  mx-auto ${open ? "scrollable-table-open" : "scrollable-table-closed"}`}>
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
              <Loader className="animate-spin" />
            ) : (
              searchedData?.map((student, index) => (
                <MarksRow student={student} testId={id} key={index} />
              ))
            )}
            {/* <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>
                <Input type="number" name="mark" className="w-24" />
              </TableCell>
              <TableCell>{outOff ? outOff : "null"}</TableCell>
              <TableCell>
                <Button variant="ghost">
                  <Edit /> Edit
                </Button>
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarksListTable;
