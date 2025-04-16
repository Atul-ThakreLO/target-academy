import React from "react";

const BatchCard = ({data}) => {
  return (
    <div className="border rounded-lg overflow-hidden flex p-1">
      <div className="w-2 h-full bg-foreground/40 rounded-full"></div>
      <div className="py-4 w-full">
        <h6 className="text-center text-2xl font-bold tracking-widest text-foreground/80">
          {data.name}
        </h6>
      </div>
    </div>
  );
};

export default BatchCard;
