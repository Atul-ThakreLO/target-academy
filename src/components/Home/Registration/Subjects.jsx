import useGetSubjects from "@/Hooks/Registration/useGetSubjects";
import React, { useState } from "react";

const Subjects = ({func, id }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const {
        isPending: isSubjectPending,
        isError: isSubjectError,
        data: subjectData,
        error: subjectError,
      } = useGetSubjects(id);

  function handleChange(e) {
    const { value, checked } = e.target;

    setSelectedSubjects((prevSelected) =>
      checked
        ? [...prevSelected, value] // Add value if checked
        : prevSelected.filter((subject) => subject !== value) // Remove if unchecked
    );
    func(e);
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium mb-2">Select Subjects</h3>
      <div className="flex flex-col space-y-2">
        {subjectData?.map((subject) => (
          <div key={subject.subject_id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={subject.subject_id}
              value={subject.subject_id}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={subject.subject_id} className="text-sm font-medium text-gray-700">
              {subject.subject_name}
            </label>
          </div>
        ))}
      </div>

      {/* Displaying selected subjects */}
      <div className="mt-4">
        <h4 className="text-md font-semibold">Selected Subjects:</h4>
        <ul className="list-disc list-inside">
          {selectedSubjects.map((subject, index) => (
            <li key={index} className="text-sm text-gray-800">{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Subjects;

