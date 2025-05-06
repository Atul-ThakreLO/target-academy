import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ResultCard = () => {
  return (
    <Card>
      <CardHeader className="items-center">
        <Avatar className="h-20 w-20">
          <AvatarFallback>ST</AvatarFallback>
          <AvatarImage src="" alt="" />
        </Avatar>
        <p className="font-medium text-center text-lg md:text-xl">Name of Student</p>
      </CardHeader>
      <Separator />
      <CardContent>
        <table className="w-full mt-2">
          <tr>
            <td className="text-start text-sm">Chemistry</td>
            <td>:</td>
            <th>94</th>
          </tr>
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
          <p className="font-semibold text-lg">81.00%</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
