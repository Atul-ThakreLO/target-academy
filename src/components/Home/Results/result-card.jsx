import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import nickName from "@/components/Utils/nick-name";
import React from "react";

const ResultCard = ({ data }) => {
  console.log(data);

  return (
    <Card>
      <CardHeader className="items-center">
        <Avatar className="h-20 w-20">
          <AvatarFallback>
            {nickName(data?.student.StudentInfo.student_name)}
          </AvatarFallback>
          <AvatarImage
          className="object-cover"
            src={data?.student.StudentInfo.avtar_url}
            alt={data?.student.StudentInfo.student_name}
          />
        </Avatar>
        <p className="font-medium text-center text-lg md:text-xl">
          {data?.student.StudentInfo.student_name}
        </p>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="w-full mt-2">
          {data?.marks?.map((sm) => (
            <tr>
              <td className="text-start text-sm">{sm.subject}</td>
              <td>:</td>
              <th>{sm.marks}</th>
            </tr>
          ))}

          {/* <tr>
            <td className="text-start">Physics</td>
            <td>:</td>
            <th>84</th>
          </tr>
          <tr>
            <td className="text-start">Mathematics</td>
            <td>:</td>
            <th>82</th>
          </tr> */}
        </table>
      </CardContent>
      <Separator />
      <CardFooter>
        <div className="flex items-center w-full justify-between mt-5">
          <p className="font-semibold text-lg">Total %: </p>
          <p className="font-semibold text-lg">{data?.total_percent}%</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
