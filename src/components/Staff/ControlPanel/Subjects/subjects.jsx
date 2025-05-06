import React, { useEffect, useState } from "react";
import SubjectCards from "./subject-cards";
import { useGetSubjectsAll } from "@/Hooks/use-subject";
import { useSelector } from "react-redux";

const Subjects = () => {
  const { data, isFetched, isLoading } = useGetSubjectsAll();
  
  const { staff } = useSelector((state) => state.authStaff);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Subjects
        </h6>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-5 mt-5">
        {isLoading
          ? "loading"
          : data.data.map((data) => (
              <SubjectCards
                classId={data.id}
                name={data.name}
                subjects={data.Subjects}
                key={data.id}
              />
            ))}
      </div>
    </>
  );
};

export default Subjects;
