import React from "react";
import EditSubjects from "./edit-subjects";

const SubjectCards = ({ classId, name, subjects }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md relative group">
      <div className="absolute right-0 top-0 hidden group-hover:block">
        <EditSubjects id={classId} />
      </div>
      <h6 className="text-lg font-bold">{name} :</h6>
      <ul className="pl-4 list-inside mt-3 list-disc">
        {subjects.map((subject, index) => (
          <li key={index}>{subject.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectCards;
