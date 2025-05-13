import React from "react";

const HostCardSkeleton = () => {
  return (
    <div class="flex gap-3 animate-pulse">
      <span class="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
        <span class="inline-block rounded-full bg-muted h-16 w-16"></span>
      </span>
      <div>
        <p className="w-20 h-7 bg-muted"></p>
      </div>
    </div>
  );
};

export default HostCardSkeleton;
