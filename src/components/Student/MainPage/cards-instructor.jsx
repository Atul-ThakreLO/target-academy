import { Button } from "@/components/ui/button";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Plus } from "lucide-react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import nickName from "@/components/Utils/nick-name";
import { Separator } from "@/components/ui/separator";

const CardsInstructor = ({ avatar, name, labels, mail, phone }) => {
  const avatarFallback = nickName(name);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-center">
            <Avatar className="w-16 h-16">
              <AvatarFallback>{avatarFallback}</AvatarFallback>
              <AvatarImage></AvatarImage>
            </Avatar>
          </div>
          <div className="text-center text-lg font-semibold mt-2">{name}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 items-center justify-center">
          {labels.map((label) => {
            return (
              <span key={label}>
                <AnimatedGradientText className="text-xs font-light px-2 py-[0.1rem] border rounded-md bg-muted">
                  {label}
                </AnimatedGradientText>
              </span>
            );
          })}
        </div>
        <div className="flex justify-between items-center w-full] mt-3">
          {/* <div className="bg-[url('/plus.svg')] bg-no-repeat h-4 aspect-square opacity-70"></div> */}<Plus size={15} />
          <Separator className="w-[85%]"/>
          {/* <div className="bg-[url('/plus.svg')] bg-no-repeat h-4 aspect-square opacity-70"></div> */}<Plus size={15} />
        </div>
        <div className="mt-3">
          <a
            href="mailto:atullr3094@gmail.com"
            className="flex gap-2 items-center justify-start my-2 hover:text-blue-500 hover:underline"
          >
            <Mail size={15} />: {mail}
          </a>
          <a
            href="tel:1234567890"
            className="flex gap-2 items-center justify-start my-2 hover:text-blue-500 hover:underline"
          >
            <Phone size={15} />: {phone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardsInstructor;
