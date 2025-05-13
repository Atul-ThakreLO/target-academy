import { Button } from "@/components/ui/button";
import React from "react";

const ProvenResult = () => {
  return (
    <div>
      <div className="flex min-h-[200px] justify-center">
        <div className="grid h-full w-full overflow-clip pl-[10%]">
          <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-white p-5 relative left-1 opacity-60"></div>
          <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-white p-5 relative -left-4 -top-3 opacity-80"></div>
          <div className="border-subtle h-full w-[120%] rounded-3xl border bg-white p-5 relative -left-8 -top-6">
            <h3 className="text-lg font-medium">2025</h3>
            <div className="w-full flex flex-col items-cente gap-3">
              <div className="flex items-center gap-3">
                <Button variant="outline" className="w-28">
                  1st
                </Button>
                -
                <Button variant="outline" className="w-28">
                  95%
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="w-28">
                  2nd
                </Button>
                -
                <Button variant="outline" className="w-28">
                  93%
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="w-28">
                  3d
                </Button>
                -
                <Button variant="outline" className="w-28">
                  90%
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvenResult;
