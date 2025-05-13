import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useMemo, useState } from "react";
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
import { useGetNotesForStudent } from "@/Hooks/use-notes";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import NPCardSkeleton from "@/components/Loaders/Student/np-card-skeleton";
import { toast } from "react-toastify";

const Notes = () => {
  const [subject, setSubject] = useState("");
  const { student } = useSelector((state) => state.authStudent);
  const [searchVal, setSearchVal] = useState("");
  const [searchedNotes, setSearchedNotes] = useState("");

  const { data, isLoading, isFetched, isError, error } = useGetNotesForStudent(
    student.StudentInfo.batch_id,
    subject
  );

  useMemo(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
  }, [isLoading, isError]);

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["notes", "student", student.id]);
  }, [subject]);

  const searchedData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.note.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedNotes(arrayData);
    }
  };

  useEffect(() => {
    searchedData();
  }, [isFetched, searchVal, data?.data]);

  // const [selectedSubject, setSelectedSubject] = useState("Chemistry");

  // const filtered = pdfs.filter((pdf) => pdf.subject === selectedSubject);

  return (
    <ScrollArea className="h-[95vh]">
      <section className="p-4">
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-[0.5rem] items-stretch">
            <div className="md:w-[50%] h-16 bg-muted rounded-tl-lg rounded-tr-lg md:curv-outside relative after:bg-muted before:bg-background">
              <div className="w-full h-full flex items-center justify-center px-4">
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
              {!searchedNotes ? (
                Array.from({ length: 5 }, (_, i) => <NPCardSkeleton key={i} />)
              ) : !searchedNotes.length > 0 ? (
                <div className="text-center text-lg font-semibold">
                  The Notes for This Subject is not Provided yet
                </div>
              ) : (
                searchedNotes?.map((note) => {
                  return (
                    <CardPdf
                      key={note.id}
                      subject={note.note.subject.name}
                      title={note.note.title}
                      url={note.note.url}
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
