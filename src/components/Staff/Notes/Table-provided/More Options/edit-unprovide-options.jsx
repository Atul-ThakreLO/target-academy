import React from "react";
import EditOption from "./edit-option";
import UnprovideOption from "./unprovide-option";
import { Separator } from "@/components/ui/separator";

const EditUnprovideOptions = ({data}) => {
  return (
    <div className="flex gap-2 border px-2 rounded-xl">
      <EditOption data={data} />
      <div>
        <Separator orientation="vertical" />
      </div>
      <UnprovideOption data={data} />
    </div>
  );
};

export default EditUnprovideOptions;
