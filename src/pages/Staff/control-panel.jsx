import Batches from "@/components/Staff/ControlPanel/Batches/batches";
import Classes from "@/components/Staff/ControlPanel/Classes/classes";
import Job from "@/components/Staff/ControlPanel/Jobs/job";
import School from "@/components/Staff/ControlPanel/School/school";
import SidePanel from "@/components/Staff/ControlPanel/SidePanel/side-panel";
import Subjects from "@/components/Staff/ControlPanel/Subjects/subjects";
import React from "react";

const ControlPanel = () => {
  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <main className="mx-auto w-full min-w-0 max-w-4xl pl-3">
        <div id="schools">
          <School />
        </div>
        <div id="classes" className="mt-20">
          <Classes />
        </div>
        <div  id="batches" className="mt-20">
          <Batches />
        </div>
        <div id="subjects" className="mt-20">
          <Subjects />
        </div>
        <div id="job-portal" className="mt-20">
          <Job />
        </div>
      </main>
      <SidePanel />
    </div>
  );
};

export default ControlPanel;
