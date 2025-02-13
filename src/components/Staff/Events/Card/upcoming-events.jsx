import React from "react";
import EventCard from "./event-card";

const UcomingEvents = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default UcomingEvents;
