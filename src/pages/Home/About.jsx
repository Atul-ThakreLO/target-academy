import AppVersion from "@/components/Utils/app-version";
import React from "react";

const About = () => {
  return (
    <div>
      About
      <div className="w-[90%] mx-auto p-6">
        <h3>App version</h3>
        <div className="w-[50%]">
          <AppVersion />
        </div>
      </div>
    </div>
  );
};

export default About;
