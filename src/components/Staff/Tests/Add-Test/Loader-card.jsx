import React from "react";

const LoaderCard = () => {
  return (
    <div class="border shadow-md p-2 rounded-lg flex gap-2 h-min max-w-96 animate-pulse">
      <div className="h-14 w-12 bg-muted"></div>
      <div>
        <div className="h-4 w-72 bg-muted"></div>
      </div>
    </div>
  );
};

export default LoaderCard;
