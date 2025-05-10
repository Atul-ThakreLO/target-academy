import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Target } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row items-center bg-background rounded-xl md:pt-10 pb-5 md:py-20 shadow-lg border overflow-hidden">
        <div className="md:w-1/2 -mt-28 md:mt-0 md:pl-20 p-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-widest w-max">
            <span className="bg-background inline-block md:h-min my-2 md:my-0">Shape Your</span> <br /> <span className="bg-background inline-block md:h-min my-2 md:my-0">Future with</span> <br />{" "}
            <span className="bg-background inline-block md:h-min my-2 md:my-0">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Nurturing young minds from classes 8th to 12th with expert guidance
            and innovative teaching methods
          </p>
          <div className="flex justify-center md:justify-start">
            <Button>
              <TransitionLink href="/register">Join Our Journey</TransitionLink>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-96 flex items-center justify-cente relative md:stati">
          <img
            src="/Home/2.png"
            alt="img"
            className="mt-12 md:mt-0 md:ml-10"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="py-10 border-t border-b">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between md:py-10 border-l-2 border-r-2 text-gray-500 md:pl-10">
            <div>
              <Target className="h-14 w-14 md:h-32 md:w-32" />
            </div>
            <p className="text-lg px-4 text-justify md:px-10 tracking-wide">
              At Target Academy of Science, we don't just teach – we transform
              young minds into future leaders. With our proven teaching
              methodology and dedicated faculty, we've been shaping the academic
              journey of students from classes 8th to 12th for over 15 years.
              Our integrated approach combines conceptual clarity, practical
              application, and competitive exam preparation to ensure your child
              stays ahead in this ever-evolving educational landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
