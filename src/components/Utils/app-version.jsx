import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_VERSION } from "./app-version-object";

const AppVersion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {APP_VERSION.map((version, index) => (
        <AccordionItem value={`item-${index}`} key={version.version}>
          <AccordionTrigger>v{version.version}</AccordionTrigger>
          <AccordionContent className=" p-4">
            <p className="text-gray-500">launch date: {version.launchDate}</p>
            <p className="font-semibold mt-3">Changes:</p>
            {version.changes.length === 0 ? (
              <p className="mt-4">There is No Changes</p>
            ) : (
              <ul className="list-inside list-disc ml-4">
                {version.changes.map((change) => (
                  <li>{change}</li>
                ))}
              </ul>
            )}
            <p className="font-semibold mt-4">Description:</p>
            <p className="first-letter:pl-6 ml-2">{version?.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AppVersion;
