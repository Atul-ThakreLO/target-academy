import AppVersion from "@/components/Utils/app-version";
import React from "react";

const About = () => {
  return (
    <div className="w-[80%] mx-auto pt-10">
      <div className="bg-background rounded-xl py-20 shadow-lg border px-10">
        <h3>App version</h3>
        <div className="w-[50%]">
          <AppVersion />
        </div>
      </div>
    </div>
  );
};

export default About;
