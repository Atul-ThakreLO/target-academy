import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const InfoCard = ({ children, data, title }) => {
  return (
    <div className="mb-10">
      <div className="mb-4 rounded-xl border-2 bg-card-custom border-muted-foreground/10 shadow-lg shadow-black/20 p-5">
        <p className="pr-2 flex items-center  w-max">
          <div className="bg-foreground text-background p-3 rounded-full">
            {children}
          </div>
          <div className="p-2">{title}</div>
        </p>
        <p className="ml-12 pl-2 py-2 lg:text-2xl border-b-2 border-gray-400">
          {data}
        </p>
      </div>
    </div>
  );
};

export const InfoCardSkelleton = () => {
  return (
    <div className="mb-10">
      <div className="mb-4 rounded-xl border-2 bg-card-custom border-muted-foreground/10 shadow-lg shadow-black/20 p-5">
        <div className="pr-2 flex items-center  w-max">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="p-2">
            <Skeleton className="w-36 h-7" />
          </div>
        </div>
        <div className="ml-12 pl-2 py-2 lg:text-2xl border-b-2 border-gray-400">
          <Skeleton className="w-36 h-10" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
