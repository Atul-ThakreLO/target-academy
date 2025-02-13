import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidePanel = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="hidden xl:block">
      <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4 no-scrollbar">
        <div className="no-scrollbar h-full overflow-auto pb-10">
          <div className="space-y-2">
            <p className="font-medium">On This Page</p>
            <ul className="m-0 list-none pl-5">
              <li className="mt-5 pt-2">
                <a
                  href="#schools"
                  className="inline-block no-underline transition-colors hover:text-foreground font-medium text-foreground"
                >
                  Schools
                </a>
              </li>
              <li className="mt-5 pt-2">
                <a
                  href="#classes"
                  className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                >
                  Class Names
                </a>
              </li>
              <li className="mt-5 pt-2">
                <a
                  href="#batches"
                  className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                >
                  Batches
                </a>
              </li>
              <li className="mt-5 pt-2">
                <a
                  href="#subjects"
                  className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                >
                  Subjects
                </a>
              </li>
              <li className="mt-5 pt-2">
                <a
                  href="#job-portal"
                  className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                >
                  Job Portal
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="group relative flex flex-col gap-2 rounded-lg border p-4 text-sm mt-6 max-w-[80%]">
            <div className="text-balance text-lg font-semibold leading-tight group-hover:underline">
              Bring your app built with shadcn to life on Vercel
            </div>
            <div>Trusted by OpenAI, Sonos, Chick-fil-A, and more.</div>
            <div>
              Vercel provides tools and infrastructure to deploy apps and
              features at scale.
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-2 w-fit"
              fdprocessedid="2qrrj9"
            >
              Deploy Now
            </button>
            <a
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0"
              href="https://vercel.com/new?utm_source=shadcn_site&amp;utm_medium=web&amp;utm_campaign=docs_cta_deploy_now_callout"
            >
              <span className="sr-only">Deploy to Vercel</span>
            </a>
          </div> */}
          <div className="mt-10">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
