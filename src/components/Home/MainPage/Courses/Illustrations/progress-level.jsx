import React from "react";

const ProgressLevel = ({classN, growth}) => {
  return (
    <div className="border rounded-3xl w-full ml-[12%] p-8 pb-0 pl-16 relative">
      <div className="flex flex-col-reverse justify-evenly h-full absolute left-6 top-0 text-[0.7rem] py-8">
        <span>20% -</span>
        <span>40% -</span>
        <span>60% -</span>
        <span>80% -</span>
        <span>100% -</span>
      </div>
      <div className="border-l-2 border-b-2 flex justify-between items-end gap-5 px-10">
        <div className="w-8 rounded-t-lg border h-44 relative">
            <div style={{height: `${growth}%`}} className={`w-full bg-foreground absolute left-0 bottom-0 rounded-t-lg`}></div>
        </div>
        <h3 className="text-8xl md:text-9xl md:scale-110 -translate-y-5">{classN}</h3>
      </div>
      <p className="text-center text-[0.7rem] my-2">Growth</p>
    </div>
  );
};

export default ProgressLevel;
