import { Flame } from "lucide-react";
import React from "react";
import FeatureCards from "./feature-cards";
import SectionHeader from "@/components/Utils/MainPage/section-header";

const Features = () => {
  return (
    <>
      <div>
        {/* <span className="px-6 py-1 border rounded-full bg-background flex items-center w-min gap-2 text-sm mx-auto">
          <Flame /> Features
        </span>
        <h3 className="text-5xl font-semibold text-center mt-3">
          Why To Choose Target Academy
        </h3> */}
        {/*         
        <p className="text-center text-gray-500 mt-5 text-lg">Target Academy Provides Value Education to our Students</p> */}
        <SectionHeader
          icon={<Flame />}
          title={"Features"}
          heading={"Why To Choose Target Academy"}
          description={
            "Target Academy Provides Value Education to our Students"
          }
        />
      </div>
      <div className="mt-20">
        <FeatureCards />
      </div>
    </>
  );
};

export default Features;
