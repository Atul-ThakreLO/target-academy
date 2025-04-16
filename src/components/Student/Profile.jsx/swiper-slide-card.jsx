import React, { useEffect } from "react";

const SwiperSlideCard = ({ subjects, plan_no, plan }) => {
  const [subjectWisePlan, setSubjectWisePlan] = React.useState(1);

  useEffect(() => {
    setSubjectWisePlan(Math.floor(plan / subjects.length));
  }, [plan]);
  return (
      <div className="bg-background border-2 text-lg rounded-lg">
        <div className="p-3">
          <p className="text-lg mb-5">Plan {plan_no}</p>
          <p className="text-6xl mb-5">₹ {plan}</p>
          <p className="text-lg mb-3">Subject wise Distribution :</p>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
            {subjects.map((subject, index) => {
              return (
                <div key={index} className="flex justify-between gap-4 border-l border-r px-4">
                  <p>{subject.subject.subject_name}</p>
                  <p>{subjectWisePlan}</p>
                </div>
              );
            })}
            {/* <div className="flex justify-between gap-4 border-l border-r px-4">
              <p>Subject1-</p>
              <p>500</p>
            </div> */}
          </div>
        </div>
      </div>
  );
};

export default SwiperSlideCard;
