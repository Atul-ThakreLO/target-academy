import { Atom, Beaker, Brain, Calculator } from "lucide-react";
import React from "react";

const ScienceFoundation = () => {
  return (
    <div className="flex flex-col justify-center items-center relative group h-44">
      <p className="z-0 group-hover:text-4xl font-bold duration-300 opacity-0 group-hover:opacity-100 pb-2 bg-gradient-to-t from-foreground from-20% via-background to-foreground to-60% bg-clip-text text-transparent">Science</p>
      <div className="grid grid-cols-2 grid-rows-2 absolute z-10 group-hover:rotate-90 duration-300">
        <div className="group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:-rotate-90 duration-300">
          <div className="p-4 shadow-md rounded-full border w-min  bg-background">
            <Atom />
          </div>
        </div>
        <div className="group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:-rotate-90 duration-300">
          <div className="p-4 shadow-md rounded-full border w-min  bg-background">
            <Beaker />
          </div>
        </div>
        <div className="group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:-rotate-90 duration-300">
          <div className="p-4 shadow-md rounded-full border w-min bg-background">
            <Brain />
          </div>
        </div>
        <div className="group-hover:translate-x-6 group-hover:translate-y-6 group-hover:-rotate-90 duration-300">
          <div className="p-4 shadow-md rounded-full border w-min  bg-background">
            <Calculator />
          </div>
        </div>

        {/* <div className="p-4 shadow-md rounded-full border w-min group-hover:p-6 duration-300">
          <Beaker />
        </div>
        <div className="p-4 shadow-md rounded-full border w-min group-hover:p-6 duration-300">
          <Brain />
        </div>
        <div className="p-4 shadow-md rounded-full border w-min group-hover:p-6 duration-300">
          <Calculator />
        </div> */}
      </div>
    </div>
  );
};

export default ScienceFoundation;
