import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useGetPapersForStudent } from "@/Hooks/use-papers";

const Papers = () => {
  const [subject, setSubject] = useState("");
  const [session, setSession] = useState(new Date().getFullYear());
  const { isMobile } = useSidebar();
  const { student } = useSelector((state) => state.authStudent);
  const [searchVal, setSearchVal] = useState("");
  const [searchedPapers, setSearchedPapers] = useState("");

  const { data, isLoading, isSuccess, isFetched } = useGetPapersForStudent(
    student.StudentInfo.class_id,
    subject,
    session
  );

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["notes", "student", student.id]);
  }, [subject, session]);

  const searchedData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedPapers(arrayData);
    }
  };

  useEffect(() => {
    searchedData();
  }, [isFetched, searchVal, , data?.data]);

  // const [selectedSubject, setSelectedSubject] = useState("Chemistry");

  // const filtered = pdfs.filter((pdf) => pdf.subject === selectedSubject);

  return (
    <ScrollArea className="h-[95vh]">
      <section className="p-4">
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-[0.5rem] items-stretch">
            <div className="md:w-[50%] h-16 bg-muted rounded-tl-lg rounded-tr-lg md:curv-outside relative after:bg-muted before:bg-background">
              <div className="w-full h-full flex items-center justify-center gap-2 px-2 md:px-4">
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subjects</SelectLabel>
                      {student.StudentSubjects.map((s) => (
                        <SelectItem value={s.subject.id}>
                          {s.subject.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Select value={session} onValueChange={setSession}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Session</SelectLabel>
                      <SelectItem value={2025}>2025</SelectItem>
                      <SelectItem value={2024}>2024</SelectItem>
                      <SelectItem value={2023}>2023</SelectItem>
                      <SelectItem value={2022}>2022</SelectItem>
                      <SelectItem value={2021}>2021</SelectItem>
                      <SelectItem value={2020}>2020</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {subject ? (
                  <div className="p-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setSubject("")}
                    >
                      <X />
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="md:w-[50%] h-[3.55rem] bg-muted rounded-lg z-10 flex items-center justify-center px-2">
              <div className="relative w-full">
                <Input
                  type="search"
                  className="w-full pl-12 border-2"
                  onChange={(e) => setSearchVal(e.target.value)}
                />
                <Search className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-b-lg md:rounded-tr-lg p-8">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
              {!searchedPapers ? (
                <div className="text-center text-lg font-semibold">
                  The Notes for This Subject is not Provided yet
                </div>
              ) : (
                searchedPapers?.map((note) => {
                  return (
                    <CardPdf
                      key={note.id}
                      subject={note.subject.name}
                      title={note.title}
                      url={note.url}
                    />
                  );
                })
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
