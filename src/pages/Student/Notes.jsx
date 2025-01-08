import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CardPdf from "@/components/Student/Notes-Papers/card-pdf";

const Notes = () => {
  const { isMobile } = useSidebar();

  const pdfs = [
    {
      subject: "Chemistry",
      title: "Chem cha-1 pdf",
    },
    {
      subject: "Physics",
      title: "Phy cha-1 pdf",
    },
    {
      subject: "Mathematics",
      title: "Maths cha-1 pdf",
    },
    {
      subject: "Chemistry",
      title: "Chem cha-1 pdf",
    },
    {
      subject: "Physics",
      title: "Phy cha-1 pdf",
    },
    {
      subject: "Mathematics",
      title: "Maths cha-1 pdf",
    },
    {
      subject: "Chemistry",
      title: "Chem cha-1 pdf",
    },
    {
      subject: "Physics",
      title: "Phy cha-1 pdf",
    },
    {
      subject: "Mathematics",
      title: "Maths cha-1 pdf",
    },
    {
      subject: "Chemistry",
      title: "Chem cha-1 pdf",
    },
    {
      subject: "Physics",
      title: "Phy cha-1 pdf",
    },
    {
      subject: "Mathematics",
      title: "Maths cha-1 pdf",
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState("Chemistry");

  const filtered = pdfs.filter((pdf) => pdf.subject === selectedSubject);

  return (
    <ScrollArea className="h-[95vh]">
      <section className="p-4">
        <div>
          <div className="flex gap-[0.5rem] items-stretch">
            <div className="w-[30%] h-16 bg-muted rounded-tl-lg rounded-tr-lg curv-outside relative after:bg-muted before:bg-background">
              <div className="w-full h-full flex items-center justify-center px-4">
                <Select
                  defaultValue="Chemistry"
                  onValueChange={(value) => setSelectedSubject(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subjects</SelectLabel>
                      <SelectItem value="Chemistry">Chemistry</SelectItem>
                      <SelectItem value="Mathematics">Mathematics</SelectItem>
                      <SelectItem value="Physics">Physics</SelectItem>
                      <SelectItem value="Biology">Biology</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-[70%] h-[3.55rem] bg-muted rounded-lg z-10"></div>
          </div>
          <div className="bg-muted rounded-b-lg rounded-tr-lg p-8">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
              { filtered.length > 0 ? filtered.map((pdf, index) => {
                  return <CardPdf key={index} subject={pdf.subject} title={pdf.title} />;
              }) : <div className="text-center text-lg font-semibold">The Notes for This Subject is not Provided yet</div> }
            </div>
          </div>
        </div>
      </section>
    </ScrollArea>
  );
};

export default Notes;

{
  /* <div>
      <div className="p-1 sm:p-3 lg:p-6">
        <div className="p-1 sm:p-3 lg:p-6 bg-slate-100 rounded-xl">
          {!isMobile ? (
            <PdfDesktop />
          ) : (
            <>
              <PDFMobile />
              <Separator className="h-[2px] w-[82%] absolute right-0" />
              <PDFMobile />
              <Separator className="h-[2px] w-[82%] absolute right-0" />
              <PDFMobile />
              <Separator className="h-[2px] w-[82%] absolute right-0" />
            </>
          )}
        </div>
      </div>
    </div> */
}
