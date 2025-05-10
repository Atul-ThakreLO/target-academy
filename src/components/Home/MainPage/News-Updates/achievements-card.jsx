import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const AchievementsCard = ({ title, para, index }) => {
  return (
    <Card>
      <CardHeader className="pt-8">
        <h4 className="text-2xl font-semibold">{title}</h4>
      </CardHeader>
      <CardContent>
        <p>{para}</p>
      </CardContent>
      <CardFooter>
        {/* <div className="h-56"></div> */}
      </CardFooter>
    </Card>
  );
};

export default AchievementsCard;
