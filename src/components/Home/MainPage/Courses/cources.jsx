import { School } from "lucide-react";
import React from "react";
import CourseCard from "./course-card";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { cources } from "@/constants/Home/cources";

const Cources = () => {
  return (
    <div className="flex flex-col md:flex-row sticky top-10 px-2">
      <div className="flex justify-center md:w-1/2 pb-20 h-full sticky top-[13%] md:relative md:top-0 md:h-auto">
        <div className="sticky top-[25%] md:top-[40%] md:h-min">
          <SectionHeader
            icon={<School />}
            title={"Cources"}
            heading={"Our Programs"}
            description={"Target Academy Provides following Courses"}
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-60 items-center">
        {cources.map((cource, index) => (
          <CourseCard key={index} data={cource} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Cources;
