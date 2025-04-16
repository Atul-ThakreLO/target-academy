import React, { useState } from "react";
import BatchCarousel from "./batch-carousel";

const Batches = () => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">
          Batches
        </h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
      </div>
      <BatchCarousel />
    </>
  );
};

export default Batches;
