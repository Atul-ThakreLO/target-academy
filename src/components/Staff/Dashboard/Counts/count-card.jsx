import { TransitionLink } from "@/components/Utils/transition-link";
import { Link } from "lucide-react";
import React from "react";

const CountCard = ({ icon, title, count, href }) => {
  return (
    <div className="p-3 border rounded-xl">
      <div className="flex gap-2 items-center">
        <span className="bg-muted rounded-full p-2">{icon}</span>
        <span className="mb-1 text-lg">{title}</span>
      </div>
      <div className="flex justify-between items-center mt-3">
        {!count ? (
          <span className="border-l-4 pl-1 text-2xl font-bold h-8 w-8 bg-muted"></span>
        ) : (
          <span className="border-l-4 pl-2 text-2xl font-bold">{count}</span>
        )}

        {href && (
          <TransitionLink href={href}>
            <Link size={17} />
          </TransitionLink>
        )}
      </div>
    </div>
  );
};

export default CountCard;
