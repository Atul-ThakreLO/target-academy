import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CircleAlert,
  CircleCheck,
  Loader2,
  Package2,
  Search,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dueStatus } from "./due-status";
import {
  useGetAssignmentsForStudent,
  useUnSubmitAssignment,
} from "@/Hooks/use-assignment";
import { useSelector } from "react-redux";
import { formatDate } from "@/components/Utils/Date Formater/formatDate";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import SubmitAssignments from "./submit-assignments";
import { useQueryClient } from "@tanstack/react-query";
import { useSidebar } from "@/components/ui/sidebar";

const AssignmentsList = () => {
  const [subject, setSubject] = useState("");
  const { student } = useSelector((state) => state.authStudent);
  const [searchVal, setSearchVal] = useState("");
  const [searchedAssi, setSearchedAssi] = useState("");
  const { open } = useSidebar();

  const { data, isLoading, isSuccess, isFetched } = useGetAssignmentsForStudent(
    student.StudentInfo.batch_id,
    subject
  );

  const mutation = useUnSubmitAssignment();

  const handleUnsubmit = (id) => {
    mutation.mutate(id);
  };

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(["assignments", "student", "id", student.id]);
  }, [subject]);

  const searchedData = () => {
    if (isFetched) {
      let arrayData = data?.data.filter((val) =>
        val.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchedAssi(arrayData);
    }
  };

  useEffect(() => {
    searchedData();
  }, [isFetched, searchVal, , data?.data]);

  useEffect(() => {
    if (isSuccess) {
      console.log(data?.data);
    }
  }, [isLoading, isSuccess]);
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-[0.5rem] items-stretch">
          <div className="md:w-[50%] h-16 bg-muted rounded-tl-lg rounded-tr-lg md:curv-outside relative after:bg-muted before:bg-background flex">
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
        <div className={`bg-muted rounded-b-lg md:rounded-tr-lg p-2 md:p-8 ${open ? "scrollable-table-open" : "scrollable-table-closed"}`}>
          <div className="border rounded-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Title</TableHead>
                  <TableHead className="text-center">Content</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Post Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableRow>
                  <TableCell className="text-center">
                    This the Assignment-1
                  </TableCell>
                  <TableCell className="text-center">
                    <Package2 />
                  </TableCell>
                  <TableCell>Chemistry</TableCell>
                  <TableCell>12-04-2025</TableCell>
                  <TableCell>{dueStatus("2025-04-15T18:30:00.000Z")}</TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <p className="flex gap-1 items-center text-green-500">
                      <span>
                        <CircleCheck size={17} />
                      </span>
                      <span>Completed</span>
                    </p>
                    <Button variant="outline">View</Button>
                    <Button variant="outline">
                      <CircleAlert /> UnSubmit
                    </Button>
                  </TableCell>
                </TableRow> */}
                {!searchedAssi ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  searchedAssi.map((assi) => (
                    <TableRow>
                      <TableCell className="text-center">
                        {assi.title}
                      </TableCell>
                      <TableCell className="text-center">
                        <Dialog
                        //  open={dialogState} onOpenChange={handleDialog}
                        >
                          <DialogTrigger className="hover:text-blue-500">
                            <Package2 />
                          </DialogTrigger>
                          <PdfPreview url={assi.pdf_url} />
                        </Dialog>
                      </TableCell>
                      <TableCell>{assi.subject.name}</TableCell>
                      <TableCell>{formatDate(assi.date)}</TableCell>
                      <TableCell>
                        {dueStatus("2025-04-15T18:30:00.000Z")}
                      </TableCell>
                      <TableCell className="flex justify-end">
                        {assi.completedAssignment.length > 0 ? (
                          <div className="flex justify-end gap-2">
                            <p className="flex gap-1 items-center text-green-500">
                              <span>
                                <CircleCheck size={17} />
                              </span>
                              <span>Completed</span>
                            </p>
                            <Dialog
                            //  open={dialogState} onOpenChange={handleDialog}
                            >
                              <DialogTrigger className="hover:text-blue-500">
                                <Button variant="outline" type="button">
                                  View
                                </Button>
                              </DialogTrigger>
                              <PdfPreview url={assi.pdf_url} />
                            </Dialog>
                            <Button
                              variant="outline"
                              type="button"
                              disabled={mutation.isPending}
                              onClick={() =>
                                handleUnsubmit(assi.completedAssignment[0].id)
                              }
                            >
                              <CircleAlert />{" "}
                              {mutation.isPending ? (
                                <Loader2 className="animate-spin" />
                              ) : (
                                "UnSubmit"
                              )}
                            </Button>
                          </div>
                        ) : (
                          <SubmitAssignments assiID={assi.id} />
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsList;
