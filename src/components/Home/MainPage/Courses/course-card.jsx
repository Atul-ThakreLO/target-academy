import React from "react";

const CourseCard = ({ title, para, index }) => {
  return (
    <div
      className={`py-6 px-4 bg-background rounded-xl border w-full md:w-[400px] flex flex-col gap-4 sticky top-[33%] md:top-[25%]`}
    >
      <div>
        <span className="bg-muted p-2 rounded-lg font-extrabold">0{index + 1}</span>
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="pr-4">{para}</p>
      {/* <div className="w-full h-44"></div> */}
    </div>
  );
};

export default CourseCard;
