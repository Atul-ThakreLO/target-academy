import Event from "@/components/Staff/Events/event";
import Notices from "@/components/Staff/Notices/notices";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

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
