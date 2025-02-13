import { Separator } from "@/components/ui/separator";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { User } from "lucide-react";
import React from "react";
import FacultyCard from "./faculty-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Faculty = () => {
  return (
    <div className="p-8">
      <SectionHeader
        icon={<User />}
        title={"Faculty"}
        heading={"Meet Our Expert Faculty"}
        description={"We have expert faculty to shape future of your child"}
      />
      <div className="flex h-full w-full mt-20">
        <div className="flex flex-col gap-2 w-1/2">
          <div className=" w-[90%] mx-auto flex flex-col gap-2">
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
            <FacultyCard />
          </div>
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>
        <div className="w-1/2">
          <div className="w-[90%] mx-auto bg-background/50 h-full rounded-xl border p-6">
            <Card className="px-4">
              <CardHeader className="flex items-center gap-2">
                <Avatar className="h-28 w-28">
                  <AvatarFallback>TE</AvatarFallback>
                  <AvatarImage src="" alt="" />
                </Avatar>
                <p>abcd@gmail.com</p>
              </CardHeader>
              <Separator />
              <CardContent>
                <table className="w-full mt-2">
                  <tr>
                    <th className="text-start">Name</th>
                    <td>:</td>
                    <td>Name of Teacher</td>
                  </tr>
                  <tr>
                    <th className="text-start">Education</th>
                    <td>:</td>
                    <td>Education List</td>
                  </tr>
                  <tr>
                    <th className="text-start">Experiance</th>
                    <td>:</td>
                    <td>Experiance</td>
                  </tr>
                  <tr>
                    <th className="text-start">In Target</th>
                    <td>:</td>
                    <td>Years</td>
                  </tr>
                </table>
                {/* <p><b>Name:</b> Name of Teacher</p>
                <p><b>Education:</b> Name of Teacher</p>
                <p><b>Experiance:</b> Name of Teacher</p>
                <p><b>In Target:</b> Name of Teacher</p> */}
              </CardContent>
              <Separator />
              <CardFooter className="mt-2">
                <div className="bg-muted p-4 rounded-lg flex gap-2 items-center">
                  <span>Note:</span>
                  <div>
                    <Separator orientation="vertical" />
                  </div>
                  <p>The above Information is Provided by an individual</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
