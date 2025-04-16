import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const Events = () => {
  const [events, setEvents] = useState("upcoming");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const eventsArray = [
    {
      srNo: 1,
      description: "Annual Company Meeting",
      date: "2023-12-15",
      time: "10:00:00",
    },
    {
      srNo: 2,
      description: "Product Launch Event",
      date: "2024-12-30",
      time: "15:30:00",
    },
    {
      srNo: 3,
      description: "Team Building Workshop",
      date: "2024-12-10",
      time: "09:00:00",
    },
    {
      srNo: 4,
      description: "Client Presentation",
      date: "2023-11-28",
      time: "14:00:00",
    },
    {
      srNo: 5,
      description: "Office Holiday Party",
      date: "2025-01-02",
      time: "18:00:00",
    },
    {
      srNo: 6,
      description: "Performance Review Meeting",
      date: "2024-06-15",
      time: "11:00:00",
    },
    {
      srNo: 7,
      description: "Webinar: Future of AI",
      date: "2023-10-25",
      time: "16:00:00",
    },
    {
      srNo: 8,
      description: "Code Hackathon",
      date: "2024-02-29",
      time: "09:00:00",
    },
    {
      srNo: 9,
      description: "Project Deadline",
      date: "2023-09-30",
      time: "23:59:59",
    },
    {
      srNo: 10,
      description: "Community Volunteering Day",
      date: "2024-03-20",
      time: "08:30:00",
    },
  ];

  useEffect(() => {
    const now = new Date();
    const filterd = eventsArray.filter((event) => {
      const eventTime = new Date(`${event.date}T${event.time}`);
      if (events === "upcoming") {
        return eventTime >= now;
      } else if (events === "previous") {
        return eventTime <= now;
      }
      return false;
    });

    setFilteredEvents(filterd);
  }, [events]);

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <div>
        <div className="relative bg-muted flex gap-4 px-2 py-2 border rounded-[calc(calc(var(--radius)-9px)+0.5rem)] shadow-lg w-96">
          <div
            className={`absolute px-4 py-2 h-[75%] w-[50%] bg-foreground top-[50%] translate-y-[-50%] duration-200 ${
              events === "upcoming"
                ? "left-[0.35rem] translate-x-0"
                : "-left-[0.35rem] translate-x-full"
            }  rounded-sm`}
          ></div>
          <div
            className={`w-[50%] z-10 text-center text-lg ${
              events === "upcoming" ? "text-background" : "text-foreground"
            } text-background cursor-pointer`}
            onClick={() => setEvents("upcoming")}
          >
            Upcoming
          </div>
          <div
            className={`w-[50%] z-10 text-center text-lg ${
              events === "upcoming" ? "text-foreground" : "text-background"
            } text-background cursor-pointer`}
            onClick={() => setEvents("previous")}
          >
            Previous
          </div>
        </div>
      </div>
      <div className="w-full md:px-4">
        <ScrollArea className="md:max-h-[50vh] md:h-[40vh]">
          <Table className="w-full">
            <TableCaption>A list of your Events and Tests</TableCaption>
            <TableHeader>
              <TableRow className="text-center">
                <TableHead className="w-[100px] text-center border-r">
                  Sr.No
                </TableHead>
                <TableHead className="text-center border-r">
                  Description
                </TableHead>
                <TableHead className="text-center border-r">
                  Date <span>(YYYY-MM-DD)</span>
                </TableHead>
                <TableHead className="text-center">
                  Time <span>(24 hrs)</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event.srNo}>
                  <TableCell className="text-center border-r">
                    {event.srNo}
                  </TableCell>
                  <TableCell className="text-center border-r">
                    {event.description}
                  </TableCell>
                  <TableCell className="text-center border-r">
                    {event.date}
                  </TableCell>
                  <TableCell className="text-center">{event.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Events;
