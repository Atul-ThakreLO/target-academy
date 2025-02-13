import { Check } from "lucide-react";
import React from "react";

const ProgressBar = ({ prog }) => {
  const progress = 100 - prog;
  return (
    <div className="relative w-min mx-auto">
      <svg width={60} height={60} viewBox="0 0 120 120">
        <circle
          r={50}
          cx="60"
          cy="60"
          className="stroke-gray-300"
          strokeWidth={13}
          fill="none"
        />
        <circle
          r={50}
          cx="60"
          cy="60"
          className="stroke-foreground"
          strokeWidth={13}
          fill="none"
          strokeDasharray={100}
          strokeDashoffset={progress}
          pathLength={99.5}
        />
      </svg>
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {prog === 100 ? <Check /> : prog + "%"}
      </p>
    </div>
  );
};

export default ProgressBar;
