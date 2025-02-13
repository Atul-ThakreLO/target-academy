import { Button } from "@/components/ui/button";
import Tabs from "@/components/Utils/Tabs/tabs";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import UpcomingTable from "./Card/upcoming-events";
import PreviousTable from "./Card/previous-events";
import EventCard from "./Card/event-card";

const Event = () => {
  const [add, setAdd] = useState(false);
  const [event, setEvent] = useState("Upcoming");

  const updateTab = (value) => {
    setEvent(value);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-3xl font-semibold gradient-title-custom">Events</h6>
        {/* <p className="text-gray-500 mt-1">Add or Provide Notes</p> */}
        {add ? (
          <Button
            variant="outline"
            onClick={() => setAdd((prev) => !prev)}
            className="border-red-500 text-red-500"
          >
            <Minus /> Cancel
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setAdd((prev) => !prev)}>
            <Plus /> Add New
          </Button>
        )}
      </div>
      <div>
        <div className="flex justify-center">
          <Tabs tab_1={"Upcoming"} tab_2={"Previous"} value={updateTab} />
        </div>
        <div className="mt-10">
          {event === "Upcoming" ? <UpcomingTable /> : <PreviousTable />}
        </div>
      </div>
    </>
  );
};

export default Event;
