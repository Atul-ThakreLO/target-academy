import MarksListTable from "@/components/Staff/Tests/Marks/Table/marks-list-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { TransitionLink } from "@/components/Utils/transition-link";
import { ChevronRight, Upload } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";

const TestMarks = () => {
  const { id } = useParams();
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
      <div className="flex gap-10 justify-around mt-7">
        <div className="w-2/5 grid place-items-center">
          <div className="border-2 border-dashed h-44 w-full rounded-xl flex flex-col items-center justify-center">
            <Upload size={50} />
            <p>Drag and Drop or Click to slect Paper</p>
          </div>
        </div>

        <div className="w-min">
          <Separator orientation="vertical" />
        </div>
        <div className="grid grid-cols-5 gap-10 w-3/5">
          <div className="pt-3 col-span-3">
            <h6 className="text-xl font-semibold">Highest Marks</h6>
            <div className="p-4 border rounded-lg mt-5 flex gap-6">
              <div className="flex items-center justify-center">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>TE</AvatarFallback>
                  <AvatarImage src="" alt="" />
                </Avatar>
              </div>
              <div className="w-full">
                <span className="text-4xl font-semibold">95</span>
                <p className="text-lg">Student Name</p>
              </div>
              <div className="flex justify-center items-center border-l pl-4">
                <img src={"/trophy-1.svg"} alt="trophy" className="h-16 w-16" />
              </div>
            </div>
          </div>
          <div className="pt-2 col-span-2">
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
        <MarksListTable />
      </div>
    </div>
  );
};

export default TestMarks;
