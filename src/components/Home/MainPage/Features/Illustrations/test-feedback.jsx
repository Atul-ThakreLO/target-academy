import React from "react";

const TestFeedback = () => {
  return (
    <div className="mt-auto">
      <div className="pointer-events-none relative -ml-8 h-full min-h-[250px] w-[calc(100%+2rem)] overflow-clip md:aspect-[3/1.4]">
        <div className="border-subtle absolute right-0 top-0 h-full shrink-0 rounded-t-3xl border-l border-r border-t bg-white">
          <header className="border-subtle flex justify-end gap-4 border-b px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="flex h-auto w-fit flex-row items-center"></div>
              <label className="text-emphasis block text-sm font-medium leading-none py-1">
                Overlay my calendar
              </label>
            </div>
            <div>
              <div
                role="group"
                dir="ltr"
                className="border-subtle rounded-[10px] border p-0.5 inline-flex gap-0.5 rtl:flex-row-reverse bg-subtle "
                tabindex="0"
                data-orientation="horizontal"
              >
                <button
                  type="button"
                  data-state="on"
                  role="radio"
                  aria-checked="true"
                  data-testid="toggle-group-item-12h"
                  className="aria-checked:bg-default aria-checked:border-subtle rounded-lg border border-transparent p-1.5 text-sm leading-none transition aria-checked:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.03),0px_2px_2px_-1px_rgba(0,0,0,0.03)] text-default [&amp;[aria-checked='false']]:hover:text-emphasis"
                  tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <div className="flex items-center gap-1 justify-center">12h</div>
                </button>
                <button
                  type="button"
                  data-state="off"
                  role="radio"
                  aria-checked="false"
                  data-testid="toggle-group-item-24h"
                  className="aria-checked:bg-default aria-checked:border-subtle rounded-lg border border-transparent p-1.5 text-sm leading-none transition aria-checked:shadow-[0px_2px_3px_0px_rgba(0,0,0,0.03),0px_2px_2px_-1px_rgba(0,0,0,0.03)] text-default [&amp;[aria-checked='false']]:hover:text-emphasis"
                  tabindex="-1"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  <div className="flex items-center gap-1 justify-center">24h</div>
                </button>
              </div>
            </div>
          </header>
          <div className="grid h-full grid-cols-[repeat(6,105px)] grid-rows-[auto_1fr] text-sm">
            <div className="border-subtle text-subtle col-span-6 grid grid-cols-[subgrid] border-b py-2 text-center text-xs font-medium">
              <p>Sun 05</p>
              <p>Mon 06</p>
              <p>Tue 07</p>
              <p className="text-black">
                Wed{" "}
                <span className="rounded-lg bg-black px-1 py-[2px] text-white">
                  08
                </span>
              </p>
              <p>Thu 09</p>
              <p>Fri 10</p>
            </div>
            <div className="divide-subtle col-span-6 grid h-full grid-cols-[subgrid] divide-x [--fifteen-min-size:30px] [--thirty-min-size:calc(var(--fifteen-min-size)*2)] [&amp;>div]:grid [&amp;>div]:grid-cols-1 [&amp;>div]:grid-rows-[repeat(5,var(--fifteen-min-size))]">
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]"></div>
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                <div
                  className="m-[2px] rounded-lg p-2 row-span-6 row-start-1 text-[#0561A2 bg-[#D9F3FF]"
                  //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Making coffee
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    09:00 AM - 4PM
                  </span>
                </div>
              </div>
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                <div
                  className="m-[2px] mt-32 rounded-lg p-2 row-span-2 row-start-3 text-[#B081D7 bg-[#E9DDFE]"
                //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Chemistry Test
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    11:30 AM - 2PM
                  </span>
                </div>
              </div>
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                <div
                  className="m-[2px] rounded-lg p-2 row-span-2 row-start-1 text-[#B081D7 bg-[#E9DDFE]"
                  //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Maths Test
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    11:30 AM - 2 PM
                  </span>
                </div>
                {/* <div
                  className="m-[2px] rounded-lg p-2 row-span-3 row-start-4 bg-[#F5F5F5] text-[#434C5C] translate-y-3"
                  //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Maths Test
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    6 PM - 8:30 PM
                  </span>
                </div> */}
              </div>
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                <div
                  className="m-[2px] rounded-lg p-2 row-span-6 row-start-3 text-[#882D2F bg-[#F9D7D9]"
                  //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Parents Meeting
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    7:30 PM - 8:30 PM
                  </span>
                </div>
              </div>
              <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                <div
                  className="m-[2px] mt-16 rounded-lg p-2 row-span-4 row-start-2 text-[#0561A2 bg-[#D9F3FF]"
                  //   style="opacity: 0; transform: translateY(10px);"
                >
                  <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">
                    Physics Test
                  </span>
                  <span className="block text-[10px] leading-[1.5] opacity-50">
                    8:30 PM - 9:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestFeedback;
