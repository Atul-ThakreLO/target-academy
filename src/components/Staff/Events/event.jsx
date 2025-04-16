import { Button } from "@/components/ui/button";
import Tabs from "@/components/Utils/Tabs/tabs";
import { CalendarIcon, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import UpcomingTable from "./Card/upcoming-events";
import PreviousTable from "./Card/previous-events";
import EventCard from "./Card/event-card";
import SelectField from "@/components/Utils/Form-Fields/select-field";
import InputField from "@/components/Utils/input-field";
import { Controller, useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const Event = () => {
  const [add, setAdd] = useState(false);
  const [event, setEvent] = useState("Upcoming");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
      <div className="mt-5">
        <div
          className={`${
            add ? "h-96 duration-500" : "h-0 duration-300"
          } overflow-hidden border-b`}
        >
          <form action="">
            {/* <InputField />
            <InputField />
            <InputField />
            <SelectField /> */}
            <Controller
              control={control}
              name={"expiry_date"}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-[240px] pl-3 text-left font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
          </form>
        </div>
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
