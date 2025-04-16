import React from "react";

const ErrorOccured = ({text}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <img src="/error-occured.png" alt="Data Not Found" />
      <p className="text-4xl font-medium font-mono">{text}</p>
    </div>
  );
};

export default ErrorOccured;
