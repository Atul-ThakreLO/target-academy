import React from "react";
import { PersonalizedAttention } from "./Illustrations/personalized-attention";

const FeatureCards = ({ data: { title, desc, Illustration }, index }) => {
  return (
    <div className="py-8 px-4 bg-background rounded-xl border flex flex-col gap-4 overflow-hidden">
      <div>
        <span className="bg-muted p-2 rounded-lg font-extrabold">
          0{index + 1}
        </span>
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="pr-4">{desc}</p>
      <Illustration />
    </div>
  );
};

export default FeatureCards;
