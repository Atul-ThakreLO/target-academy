import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Star } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import PdfPreview from "./pdf-preview";

const CardPdf = ({ subject, title }) => {
  const [star, setStar] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="shadow-lg cursor-pointer"
          onClick={() => console.log("clicked")}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <button
                type="button"
                variant={"ghost"}
                onClick={() => setStar(!star)}
              >
                <Star
                  className={`${
                    star ? "text-red-500 " : "text-gray-500"
                  }  hover:scale-125 transition-[transform] duration-200`}
                  size={20}
                  fill={star ? "rgb(239 68 68)" : "none"}
                />
              </button>
              <p className="text-sm font-light text-gray-500 tracking-wider">
                {subject}
              </p>
            </div>
            <CardTitle>
              <div className="flex items-center justify-center mt-5">
                {/* <img src="/pdf-icon.png" alt="pdf" className="h-20" /> */}
                <FileText size={50} />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-[1rem] line-clamp-2">{title}</div>
          </CardContent>
        </Card>
      </DialogTrigger>
        <PdfPreview />
    </Dialog>
  );
};

export default CardPdf;
