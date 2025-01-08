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
          <AccordionContent>
            <p className="text-gray-500">launch date: {version.launchDate}</p>
            <p className="font-semibold">Description:</p>
            <p>{version?.description}</p>
            <p className="font-semibold">Changes:</p>
            {version.changes.length === 0 ? (
              <p>There is No Changes</p>
            ) : (
              <ul>
                {version.changes.map((change) => (
                  <li>{change}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AppVersion;
