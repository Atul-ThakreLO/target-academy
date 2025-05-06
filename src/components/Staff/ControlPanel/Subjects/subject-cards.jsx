import React from "react";
import EditSubjects from "./edit-subjects";
import { useSelector } from "react-redux";

const SubjectCards = ({ classId, name, subjects }) => {
  const { staff } = useSelector((state) => state.authStaff);
  return (
    <div className="border rounded-lg p-4 shadow-md relative group">
      {!staff.OfficeStaffInfo.isAdmin ? (
        ""
      ) : (
        <div className="absolute right-0 top-0 hidden group-hover:block">
          <EditSubjects id={classId} />
        </div>
      )}

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
