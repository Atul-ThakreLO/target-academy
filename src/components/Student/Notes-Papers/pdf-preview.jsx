import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSidebar } from "@/components/ui/sidebar";
import ViewPdf from "@/components/Utils/view-pdf";
import React, { useRef, useState } from "react";

const PdfPreview = ({url}) => {
  const { isMobile } = useSidebar();

  const [zoom, setZoom] = useState(isMobile ? 200 : 500);

  const intervalRef = useRef(null);

  // let interval;

  function startZoom(e) {
    intervalRef.current = setInterval(() => {
      setZoom((prev) => {
        if (e.target.value === "increase") {
          if (isMobile) {
            if (prev < 700) {
              return prev + 100;
            }
          } else {
            if (prev < 2000) {
              return prev + 100;
            } else {
              return prev;
            }
          }
        } else {
          if (prev > 200) {
            return prev - 100;
          } else {
            return prev;
          }
        }
      });
    }, 100);
  }

  const stopZoom = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <DialogContent className="md:w-[90vw] max-w-[100vw] min-w-[35vw] h-full flex items-center justify-center">
      <div className="w-full h-full">
        <DialogHeader>
          <DialogTitle>PDF Viewer</DialogTitle>
        </DialogHeader>

        <div className="w-full h-full flex items-center justify-center overflow-auto">
          <div className={`h-full w-full rounded-lg relative`}>
            <ViewPdf url={url} mobile={false} width={zoom} />
          </div>
        </div>

        {/* <DialogClose asChild>
          <button className="absolute top-4 right-4 text-red-500 hover:text-red-700">
            Close
          </button>
        </DialogClose> */}
        <div className="absolute bottom-4 right-[50%] bg-black translate-x-[50%] rounded-lg flex items-center justify-center">
          <Button
            onMouseDown={startZoom}
            onMouseUp={stopZoom}
            onMouseLeave={stopZoom}
            onTouchStart={startZoom}
            onTouchEnd={stopZoom}
            type={"button"}
            value="decrease"
          >
            -
          </Button>
          <span className="px-8 text-white">
            {Math.round(isMobile ? zoom / 7 : zoom / 10)}%
          </span>
          <Button
            onMouseDown={startZoom}
            onMouseUp={stopZoom}
            onMouseLeave={stopZoom}
            onTouchStart={startZoom}
            onTouchEnd={stopZoom}
            type={"button"}
            value="increase"
          >
            +
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default PdfPreview;
