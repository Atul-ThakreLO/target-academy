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

const PDFMobile = () => {
  return (
    <div>
      <div>
        <div className="w-full p-2">
          <div className="flex">
            <div className="flex items-center justify-center ">
              {/* <Package size={40} /> */}
              <div className="h-12 overflow-hidden relative hover:pt-0 duration-75 flex justify-center rounded-sm ">
                <div className="flex">
                  <PDFPreview mobile={true} />
                </div>
              </div>
            </div>
            <div className="pl-5 pr-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="h-[65%] text-ellipsis line-clamp-2 break-all tracking-tight leading-tight text-gray-800 text-[1.1rem]">
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
              <div className="w-full h-min flex justify-between items-center">
                <span className="text-gray-500">PDF</span>
                <div>
                  <a href={pdf} target="_blank">
                    <Button variant="outline" className="h-6 mr-2">
                      View
                    </Button>
                  </a>
                  <Button variant="outline" className="h-6">
                    <a href={pdf} download={true}>
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFMobile;
