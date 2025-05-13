import React from "react";
import ProgressLevel from "./Illustrations/progress-level";

const CourseCard = ({ data: { title, desc, classN, growth }, index }) => {
  return (
    <div
      className={`py-6 px-4 bg-background rounded-xl border w-full md:w-[400px] flex flex-col gap-4 sticky top-[33%] md:top-[15%] overflow-hidden`}
    >
      <div>
        <span className="bg-muted p-2 rounded-lg font-extrabold">
          0{index + 1}
        </span>
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="pr-4">{desc}</p>
      <ProgressLevel classN={classN} growth={growth} />
    </div>
  );
};

export default CourseCard;
