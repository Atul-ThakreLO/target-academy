import React, { useEffect, useState } from "react";

const Tabs = ({ tab_1, tab_2, value }) => {
  const [tab, setTab] = useState(tab_1);

  useEffect(() => {
    if (tab === tab_1) {
      value(tab_1);
    } else if (tab === tab_2) {
      value(tab_2);
    }
  }, [tab]);

  return (
    <div className="relative bg-muted flex gap-4 px-2 py-2 border rounded-[calc(calc(var(--radius)-9px)+0.5rem)] shadow-lg w-96">
      <div
        className={`absolute px-4 py-2 h-[75%] w-[50%] bg-foreground top-[50%] translate-y-[-50%] duration-200 ${
          tab === tab_1
            ? "left-[0.35rem] translate-x-0"
            : "-left-[0.35rem] translate-x-full"
        }  rounded-sm`}
      ></div>
      <div
        className={`w-[50%] z-10 text-center text-lg ${
          tab === tab_1 ? "text-background" : "text-foreground"
        } text-background cursor-pointer`}
        onClick={() => setTab(tab_1)}
      >
        {tab_1}
      </div>
      <div
        className={`w-[50%] z-10 text-center text-lg ${
          tab === tab_2 ? "text-background" : "text-foreground"
        } text-background cursor-pointer`}
        onClick={() => setTab(tab_2)}
      >
        {tab_2}
      </div>
    </div>
  );
};

export default Tabs;
