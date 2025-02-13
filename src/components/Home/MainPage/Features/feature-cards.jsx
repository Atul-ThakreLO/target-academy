import React from "react";

const FeatureCards = () => {
  return (
    <div className="py-6 px-4 bg-background rounded-xl border w-[400px] flex flex-col gap-4">
      <div>
        <span className="bg-muted p-2 rounded-lg font-extrabold">01</span>
      </div>
      <h4 className="text-xl font-semibold">Expert Faculty</h4>
      <p className="pr-4">
        Learn from experienced educators with proven track records in academic
        excellence
      </p>
      <div className="w-full h-44"></div>
    </div>
  );
};

export default FeatureCards;
