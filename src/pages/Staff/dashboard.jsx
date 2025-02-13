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

const Dashboard = () => {
  const [greeting, setGreeting] = useState();
  useEffect(() => {
    setGreeting(greetingsFn());
  });
  return (
    <>
      <section className="flex justify-between">
        <div>
          <p className="text-3xl tracking-wider">{greeting}</p>
        </div>
        <div>
          <span className="px-3 ml-2 text-sm bg-green-200 rounded-full">
            Verified
          </span>
          <span className="px-3 ml-2 text-sm bg-blue-200 rounded-full">
            Teacher
          </span>
          <span className="px-3 ml-2 text-sm bg-red-200 rounded-full">
            Admin
          </span>
        </div>
      </section>
      <section className="flex gap-3 mt-5">
        <span className="text-lg self-center mb-1">Teachers</span>
        <div>
          <Separator orientation="vertical" className="border-2" />
        </div>
        <TeachersGrid />
      </section>
      <section className="mt-5 flex justify-around">
        <CountCard
          icon={<Users size={18} />}
          title={"Students"}
          count={"1231"}
          href={"/staff/students"}
        />
        <CountCard
          icon={<User size={18} />}
          title={"Staff"}
          count={"12"}
          href={"/staff/staff"}
        />
        <CountCard
          icon={<SwatchBook size={18} />}
          title={"Batches"}
          count={"16"}
        />
        <TopStudents />
      </section>
      <section className="mt-5 flex gap-4">
        <div className="w-[60%]">
          <Events />
        </div>
        <div className="w-[40%]">
          <Assignments />
          {/* <Events /> */}
        </div>
      </section>
      <section className="mt-5 flex gap-4">
        <div className="w-[35%]">
          <NoticeBoard display={"dashboard"} />
        </div>
        <div className="w-[65%]">
          <Tests />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
