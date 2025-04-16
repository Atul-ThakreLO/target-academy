import React from "react";
import EditOption from "./edit-option";
import UnprovideOption from "./unprovide-option";

const EditUnprovideOptions = ({data}) => {
  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      <EditOption data={data} />
      <UnprovideOption data={data} />
    </div>
  );
};

export default EditUnprovideOptions;
