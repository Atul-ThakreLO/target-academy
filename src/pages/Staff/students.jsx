import FilterStudent from "@/components/Staff/Students/filter-student";
import StudentsTable from "@/components/Staff/Students/students-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSidebar } from "@/components/ui/sidebar";
import { useGetStudents } from "@/Hooks/use-student";
import { Filter, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const Students = () => {
  const { open } = useSidebar();
  const [filterData, setFilterData] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchedData] = useState("");

  const { data, isLoading, isRefetching, refetch, isFetched } =
    useGetStudents(filterData);
  useEffect(() => {
    refetch();
  }, [filterData]);
  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  const searchData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.StudentInfo.student_name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedData(arrayData);
    }
  };

  useEffect(() => {
    searchData();
  }, [isFetched, searchVal, data?.data]);
  return (
    <div>
      <div className="mt-5 pl-5">
        <h6 className="text-4xl font-semibold gradient-title-custom">
          Students
        </h6>
        <p className="text-gray-500 mt-3">View Students</p>
      </div>
      <div className="mt-10 mb-5 flex justify-between items-center px-2">
        <div className="relative">
          <Input
            type="search"
            className="sm:w-96 pl-12 border-2"
            value={searchVal}
            onChange={handleSearchInput}
          />
          <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
        </div>
        <FilterStudent
          isRefetching={isRefetching}
          setFilterData={setFilterData}
        />
      </div>
      <div
        className={`border rounded-xl mx-auto ${
          open ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <StudentsTable data={searchedData} />
      </div>
    </div>
  );
};

export default Students;
