import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const AchievementsCard = () => {
  return (
    <Card>
      <CardHeader className="pt-8">
        <h4 className="text-2xl font-semibold">Creating Topper's Since 2010</h4>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint
          ex temporibus sequi voluptates! Perferendis eveniet ab pariatur
          consequatur suscipit. Molestias numquam sed ipsum officiis! Quia natus
          vitae quos illo.
        </p>
      </CardContent>
      <CardFooter>
        <div className="h-56"></div>
      </CardFooter>
    </Card>
  );
};

export default AchievementsCard;
