import React from "react";

const ClassCard = ({name}) => {
  return (
    <div className="border rounded-lg overflow-hidden p-1">
      <div className="py-8">
        <h6 className="text-4xl text-foreground/80 text-center font-bold tracking-widest">{name}</h6>
      </div>
      <div className="w-full h-2 bg-foreground/40 rounded-full"></div>
    </div>
  );
};

export default ClassCard;
