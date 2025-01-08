import React from "react";
import PDFPreview from "./view-pdf";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useSidebar } from "../ui/sidebar";
import pdf from "../Utils/maths chapter-5-c.pdf";
import { Button } from "../ui/button";

const PdfDesktop = () => {
  return (
    <div>
      <div className="h-[200px] w-[200px] rounded-xl border-2 border-gray-400 overflow-hidden">
        <div className="h-[60%] overflow-hidden relative bg-gray-300 pt-2 hover:pt-0 duration-75 flex justify-center">
          <div className="absolute flex items-center">
            <PDFPreview />
          </div>
        </div>
        <Separator />
        <div className="h-[40%] flex flex-col justify-between">
          <div className="h-[55%] px-[0.4rem] pt-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="h-[100%] text-ellipsis line-clamp-2 break-all tracking-tight leading-tight text-gray-600 text-[0.9rem]">
                    Academy of science Academy of science Academy of science
                    Academy of science Academy of science Academy of science
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Academy of science Academy of science Academy of science
                    Academy of science Academy of science Academy of science
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Separator />
          <div className="pb-1 pl-1">
            <span className="text-[0.75rem] text-gray-500">Chemistry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfDesktop;
