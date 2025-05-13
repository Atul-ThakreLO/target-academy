import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { User, User2 } from "lucide-react";
// import { AnimatedBeam } from "@/registry/magicui/animated-beam";

const Circle = forwardRef(({ className, children, name }, ref) => {
  return (
    <div>
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}
      >
        {children}
      </div>
      <p className="text-sm mt-2">{name}</p>
    </div>
  );
});

Circle.displayName = "Circle";

export function PersonalizedAttention() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  return (
    <div className=" border rounded-3xl py-10 border-b-0 -mb-20">
      <div
        className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden p-10"
        ref={containerRef}
      >
        <div className="flex size-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <Circle ref={div1Ref} name={"Teacher"}>
              <Icons.teacher />
            </Circle>
            <Circle ref={div2Ref} name={"Student"}>
              <Icons.user />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          duration={3}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        />
      </div>
    </div>
  );
}

const Icons = {
  teacher: () => (
    <User fill="black"/>
  ),
  user: () => <User />,
};
