import LoaderCard from "@/components/Staff/Tests/Add-Test/Loader-card";
import AddPaper from "@/components/Staff/Tests/Marks/add-paper";
import MarksListTable from "@/components/Staff/Tests/Marks/Table/marks-list-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  SelectSeparator,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import nickName from "@/components/Utils/nick-name";
import PdfPreview from "@/components/Utils/PDF/pdf-preview";
import { TransitionLink } from "@/components/Utils/transition-link";
import { useGetTestPapersByID } from "@/Hooks/use-test-paper";
import { ChevronRight, FileText } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TestMarks = () => {
  const { id } = useParams();

  const { data, isLoading, isFetched } = useGetTestPapersByID({ id });
  // useEffect(() => {
  //   if (isFetched) {
  //     console.log(data?.data);
  //   }
  // }, [isLoading, isFetched]);

  const { topper } = useSelector((state) => state.topperProfile);

  console.log("topper state", !topper?.StudentInfo);

  return (
    <div>
      {/* header */}
      <div className="flex gap-1 items-center mt-3">
        <TransitionLink href={"/staff/tests"}>
          <p className="text-gray-500 text-2xl font-semibold">Tests</p>
        </TransitionLink>
        <ChevronRight />
        <h3 className="text-2xl font-semibold">Test {id}</h3>
      </div>
      {/* upload */}
      <div className="flex flex-col-reverse md:flex-row md:gap-10 gap-5 justify-evenly md:mt-7 mt-5">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <LoaderCard />
          </div>
        ) : data?.data?.papers?.url ? (
          <div className="flex items-center gap-2">
            <div className="border shadow-md p-2 rounded-lg flex gap-2 w-full md:max-w-96">
              <div>
                <FileText size={50} />
              </div>
              <div>
                <Dialog>
                  <DialogTrigger className="hover:text-blue-500 text-left">
                    {data?.data.title}
                  </DialogTrigger>
                  <PdfPreview url={data?.data?.papers?.url} />
                </Dialog>
                <SelectSeparator />
                {/* <p className="line-clamp-2">{file.type}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <AddPaper data={data?.data} />
        )}
        <div className="w-min">
          <Separator orientation="vertical" />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 md:w-3/5">
          {!topper?.StudentInfo ? (
            <p>Not concluded</p>
          ) : (
            <div className="pt-3 col-span-5 md:col-span-3">
              <h6 className="text-xl font-semibold">Highest Marks</h6>
              <div className="p-4 border rounded-lg mt-5 flex gap-6">
                <div className="flex items-center justify-center">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback>
                      {nickName(topper?.StudentInfo?.student_name)}
                    </AvatarFallback>
                    <AvatarImage src="" alt="" />
                  </Avatar>
                </div>
                <div className="w-full">
                  <span className="text-4xl font-semibold">
                    {topper?.TestPaperStudents?.[0]?.marks}
                  </span>
                  <p className="text-lg">{topper?.StudentInfo?.student_name}</p>
                </div>
                <div className="flex justify-center items-center border-l pl-4">
                  <img
                    src={"/trophy-1.svg"}
                    alt="trophy"
                    className="h-16 w-16"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 col-span-5 md:col-span-2">
            <p className="text-xl font-semibold">Host For Test</p>
            <div className="flex mt-5 h-full w-full">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback>TE</AvatarFallback>
                  <AvatarImage src="" alt="" />
                </Avatar>
                <div>
                  <p>@Teacher Name</p>
                  <p>eaxmple@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* list with field for marks */}
      <div>
        <MarksListTable id={id} totalMarks={data?.data?.totalMarks} />
      </div>
    </div>
  );
};

export default TestMarks;
