import Event from "@/components/Staff/Events/event";
import Notices from "@/components/Staff/Notices/notices";
import React from "react";

const EventNotice = () => {
  return (
    <div>
      <div>
        <Event />
      </div>
      <div className="mt-20">
        <Notices />
      </div>
    </div>
  );
};

export default EventNotice;
