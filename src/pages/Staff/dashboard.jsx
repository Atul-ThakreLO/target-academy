import Assignments from "@/components/Staff/Dashboard/Assignments/assignments";
import CountCard from "@/components/Staff/Dashboard/Counts/count-card";
import Events from "@/components/Staff/Dashboard/Events/events";
import NoticeBoard from "@/components/Staff/Notices/Notice-Board/notice-board";
import TeachersGrid from "@/components/Staff/Dashboard/TeachersGrid/teachers-grid";
import Tests from "@/components/Staff/Dashboard/Tests/tests";
import TopStudents from "@/components/Staff/Dashboard/TopStudents/top-students";
import { Separator } from "@/components/ui/separator";
import { greetingsFn } from "@/components/Utils/greetings";
import { SwatchBook, User, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGetDashboard } from "@/Hooks/use-staff";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { staff } = useSelector((state) => state.authStaff);
  const [greeting, setGreeting] = useState();
  useEffect(() => {
    setGreeting(greetingsFn());
  });
  const { data, isLoading, isSuccess } = useGetDashboard();

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(data?.data);
  //   }
  // }, [isLoading, isSuccess]);

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-between">
        <div>
          <p className="text-3xl tracking-wider mt-5 md:mt-0">{greeting}</p>
        </div>
        <div className="flex justify-end gap-1 h-min">
          <span className="px-3 ml-2 text-sm bg-green-200 rounded-full">
            {staff.OfficeStaffInfo.isVerified ? "Verified" : "UnVerified"}
          </span>
          <span className="px-3 ml-2 text-sm bg-blue-200 rounded-full">
            {staff.OfficeStaffInfo.role}
          </span>
          {staff.OfficeStaffInfo.isAdmin ? (
            <span className="px-3 ml-2 text-sm bg-red-200 rounded-full">
              Admin
            </span>
          ) : (
            ""
          )}
        </div>
      </section>

      {staff.OfficeStaffInfo.isAdmin ? (
        <section className="flex gap-3 mt-5">
          <span className="text-lg self-center mb-1">Teachers</span>
          <div>
            <Separator orientation="vertical" className="border-2" />
          </div>
          <TeachersGrid />
        </section>
      ) : (
        ""
      )}
      <section className="mt-5 grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-3">
        <CountCard
          icon={<Users size={18} />}
          title={"Students"}
          count={data?.data?.studentCount}
          href={"/staff/students"}
        />
        <CountCard
          icon={<User size={18} />}
          title={"Staff"}
          count={data?.data?.staffCount}
          href={"/staff/staff"}
        />
        <CountCard
          icon={<SwatchBook size={18} />}
          title={"Batches"}
          count={data?.data?.batchCount}
        />
        <TopStudents data={data?.data} />
      </section>
      <section className="mt-5 grid grid-cols-5 gap-4">
        <div className="w-full col-span-5 md:col-span-5 lg:col-span-3 sm:col-span-5">
          <Tests />
        </div>
        <div className="w-full col-span-5 md:col-span-5 lg:col-span-2 sm:col-span-5">
          <Assignments />
          {/* <Events /> */}
        </div>
      </section>
      <section className="mt-5 grid grid-cols-5 gap-4">
        <div className="w-full col-span-5 md:col-span-5 lg:col-span-2 sm:col-span-5">
          <NoticeBoard display={"dashboard"} />
        </div>
        <div className="w-full col-span-5 md:col-span-5 lg:col-span-3 sm:col-span-5">
          <Events />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
