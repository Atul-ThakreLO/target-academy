import { Ripple } from "@/components/magicui/ripple";
import React from "react";

const Focused = () => {
  return (
    <div className="relative">
      <div className="absolute h-[500px] w-full overflow-hidden">
        <Ripple
          mainCircleSize={0}
          mainCircleOpacity={0.3}
          numCircles={8}
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default Focused;
