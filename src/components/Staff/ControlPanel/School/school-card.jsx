import React from "react";

const SchoolCard = ({ name, img }) => {
  console.log(name);

  return (
    <div className="border rounded-lg shadow-md flex overflow-hidden h-32 group hover:shadow-xl hover:-translate-y-0 duration-500">
      <div className="w-3/5 p-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
      </div>
      <div className="w-2/5">
        <img
          src={img}
          alt="shool"
          className="translate-x-7 translate-y-7 scale-110 group-hover:translate-x-0 group-hover:scale-125 duration-500"
        />
      </div>
    </div>
  );
};

export default SchoolCard;
