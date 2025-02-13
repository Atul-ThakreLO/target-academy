import React from "react";

const SectionHeader = ({ icon, title, heading, description = null }) => {
  return (
    <>
      <span className="px-6 py-1 border rounded-full bg-background flex items-center w-min gap-2 text-sm mx-auto">
        {icon} {title}
      </span>
      <h3 className="text-5xl font-semibold text-center mt-3">{heading}</h3>
      {description && <p className="text-center text-gray-500 mt-5 text-lg">{description}</p>}
    </>
  );
};

export default SectionHeader;
