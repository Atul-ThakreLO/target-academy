import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { TransitionLink } from "@/components/Utils/transition-link";

const CardsQLinks = ({title, description, href}) => {
  return (
    <Card className="shadow-lg relative group cursor-pointer">
      <TransitionLink href={href}>
        <div className="absolute top-0 left-0 cursor-pointer w-full h-full bg-black/90 rounded-lg hidden group-hover:flex items-center justify-center">
          <Link2 className="text-white" size={35} />
        </div>
      </TransitionLink>

      <CardHeader>
        <CardTitle>
          <p className="bg-gradient-to-t from-background via-foreground to-foreground bg-clip-text text-transparent text-5xl font-semibold text-center">
            {title}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardsQLinks;
