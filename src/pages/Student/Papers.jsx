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

const Papers = () => {
  const { isMobile } = useSidebar();

  const pdfs = [
    {
      subject: "Physics",
      title: "Electrostatics and Current Electricity",
      date: "2020",
    },
    {
      subject: "Chemistry",
      title: "Solid State and Solutions",
      date: "2021",
    },
    {
      subject: "Mathematics",
      title: "Integration and its Applications",
      date: "2019",
    },
    {
      subject: "Biology",
      title: "Reproduction in Organisms",
      date: "2022",
    },
    {
      subject: "Physics",
      title: "Magnetic Effects of Current and Radiation",
      date: "2018",
    },
    {
      subject: "Chemistry",
      title: "Chemical Kinetics and Surface Chemistry",
      date: "2023",
    },
    {
      subject: "Mathematics",
      title: "Differential Equations",
      date: "2017",
    },
    {
      subject: "Biology",
      title: "Ecology and Environment",
      date: "2020",
    },
    {
      subject: "Physics",
      title: "Optics",
      date: "2022",
    },
    {
      subject: "Chemistry",
      title: "Haloalkanes and Haloarenes",
      date: "2019",
    },
    {
      subject: "Mathematics",
      title: "Matrices and Determinants",
      date: "2021",
    },
    {
      subject: "Biology",
      title: "Genetics and Evolution",
      date: "2018",
    },
    {
      subject: "Physics",
      title: "Atoms and Nuclei",
      date: "2023",
    },
    {
      subject: "Chemistry",
      title: "Aldehydes, Ketones and Carboxylic Acids",
      date: "2017",
    },
    {
      subject: "Mathematics",
      title: "Three Dimensional Geometry",
      date: "2022",
    },
    {
      subject: "Biology",
      title: "Biotechnology and its Applications",
      date: "2019",
    },
    {
      subject: "Physics",
      title: "Semiconductor Electronics",
      date: "2021",
    },
    {
      subject: "Chemistry",
      title: "Amines",
      date: "2020",
    },
    {
      subject: "Mathematics",
      title: "Probability",
      date: "2018",
    },
    {
      subject: "Biology",
      title: "Human Health and Disease",
      date: "2023",
    },
  ];

  const [selectedSubject, setSelectedSubject] = useState("Chemistry");
  const [selectedYear, setSelectedYear] = useState("2023");

  const filtered = pdfs.filter(
    (pdf) => pdf.subject === selectedSubject && pdf.date === selectedYear
  );

  return (
    <ScrollArea className="h-[95vh]">
      <section className="p-4">
        <div>
          <div className="flex gap-[0.5rem] items-stretch">
            <div className="w-[60%] h-16 bg-muted rounded-tl-lg rounded-tr-lg curv-outside relative after:bg-muted before:bg-background flex">
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
              <div className="w-full h-full flex items-center justify-center px-4">
                <Select
                  defaultValue="2023"
                  onValueChange={(value) => setSelectedYear(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Year-Batch</SelectLabel>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                      <SelectItem value="2019">2019</SelectItem>
                      <SelectItem value="2018">2018</SelectItem>
                      <SelectItem value="2017">2017</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-[40%] h-[3.55rem] bg-muted rounded-lg z-10"></div>
          </div>
          <div className="bg-muted rounded-b-lg rounded-tr-lg p-8">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
              {filtered.length > 0 ? (
                filtered.map((pdf, index) => {
                  return <CardPdf key={index} subject={pdf.subject} title={pdf.title} />;
                })
              ) : (
                <div className="text-center text-lg font-semibold">
                  The Notes for This Subject is not Provided yet
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </ScrollArea>
  );
};

export default Papers;

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
