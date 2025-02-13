import { School } from "lucide-react";
import React from "react";
import CourseCard from "./course-card";
import SectionHeader from "@/components/Utils/MainPage/section-header";

const Cources = () => {
  return (
    <div className="flex sticky top-10">
      <div className="flex justify-center w-1/2 pb-20">
        <div className="sticky top-[40%] h-min">
          <SectionHeader
            icon={<School />}
            title={"Cources"}
            heading={"Our Programs"}
            description={"Target Academy Provides following Courses"}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-32 items-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Cources;
