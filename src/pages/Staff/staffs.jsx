import StaffProfileSheet from "@/components/Staff/Profile/staff-profile-sheet";
import FilterStaff from "@/components/Staff/Staff/filter-staff";
import StaffTable from "@/components/Staff/Staff/staff-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useSidebar } from "@/components/ui/sidebar";
import nickName from "@/components/Utils/nick-name";
import { useGetAllStaff } from "@/Hooks/use-staff";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Staffs = () => {
  const { open } = useSidebar();
  const [filterData, setFilterData] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [searchedData, setSearchedData] = useState("");
  
  const { staff } = useSelector((state) => state.authStaff);

  const { data, isRefetching, refetch, isFetched } =
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
      <div className="flex justify-between items-center">
        <div className="mt-5 pl-5">
          <h6 className="text-4xl font-semibold gradient-title-custom">
            Staff
          </h6>
          <p className="text-gray-500 mt-3">View Staff</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-full p-0">
              <div className="border rounded-lg flex px-4 py-2 gap-3">
                <div>
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>AT</AvatarFallback>
                    <AvatarFallback>{nickName(staff.OfficeStaffInfo.name)}</AvatarFallback>
                    <AvatarImage
                      src={staff.OfficeStaffInfo.avtar_url}
                      alt={staff.OfficeStaffInfo.name}
                      className=" object-cover object-center"
                    />
                  </Avatar>
                </div>
                <div>
                  <Separator orientation="vertical" />
                </div>
                <div className="grid place-items-center">You</div>
              </div>
            </Button>
          </SheetTrigger>
          <StaffProfileSheet data={staff} />
        </Sheet>
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
