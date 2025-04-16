import React from "react";

const DataNotFound = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/data-not-found.png" alt="Data Not Found" />
      <p className="text-xl px-2 md:text-4xl font-medium font-mono">{text}</p>
    </div>
  );
};

export default DataNotFound;
