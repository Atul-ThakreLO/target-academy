import FilterStaff from "@/components/Staff/Staff/filter-staff";
import StaffTable from "@/components/Staff/Staff/staff-table";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { useGetAllStaff } from "@/Hooks/use-staff";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const Staffs = () => {
  const { open } = useSidebar();
  const [filterData, setFilterData] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchedData] = useState("");

  const { data, isLoading, isRefetching, refetch, isFetched } =
    useGetAllStaff(filterData);
  useEffect(() => {
    refetch();
  }, [filterData]);
  const handleSearchInput = (e) => {
    setSearchVal(e.target.value);
  };

  const searchData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.OfficeStaffInfo.name.toLowerCase().includes(searchVal.toLowerCase())
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
        <h6 className="text-4xl font-semibold gradient-title-custom">Staff</h6>
        <p className="text-gray-500 mt-3">View Staff</p>
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
        <FilterStaff
          isRefetching={isRefetching}
          setFilterData={setFilterData}
        />
      </div>
      <div
        className={`border rounded-xl mx-auto ${
          open ? "scrollable-table-open" : "scrollable-table-closed"
        }`}
      >
        <StaffTable data={searchedData} />
      </div>
    </div>
  );
};

export default Staffs;
