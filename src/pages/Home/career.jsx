import CareerCard from "@/components/Home/Career/career-card";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";

const Career = () => {
  return (
    <div className="w-[80%] mx-auto pt-10 pb-96">
      <div className="mt-10">
        <SectionHeader
          icon={<BriefcaseBusiness />}
          title={"Career"}
          heading={"Career Opportunities"}
        />
        <p className="w-1/2 text-center mx-auto mt-8 text-lg">
          We're always looking for passionate educators in Physics, Chemistry,
          and Mathematics who can inspire the next generation of scientists and
          engineers. If you have a postgraduate degree in your subject, a proven
          track record of academic excellence, and the desire to make a
          difference, we want to hear from you.
        </p>
      </div>
      <div className="mt-20 p-6">
        <CareerCard />
      </div>
    </div>
  );
};

export default Career;
