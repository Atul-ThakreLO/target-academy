import React from "react";

const SubjectCards = ({ name, subjects }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h6 className="text-lg font-bold">{name} :</h6>
      <ul className="pl-4 list-inside mt-3 list-disc">
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectCards;
