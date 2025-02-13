import React from "react";

const CircleProgress = ({ prog }) => {
  const progress = 100 - prog;
  return (
    <div className="relative w-min mx-auto">
      <svg width={110} height={110} viewBox="0 0 220 220">
        <circle
          r={100}
          cx={110}
          cy={110}
          strokeWidth={20}
          fill="none"
          className="stroke-gray-300"
        />
        <circle
          r={100}
          cx={110}
          cy={110}
          strokeWidth={20}
          className="stroke-foreground"
          fill="none"
          strokeDasharray={100}
          strokeDashoffset={progress}
          pathLength={99.5}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {prog}
      </div>
    </div>
  );
};

export default CircleProgress;
