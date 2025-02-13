import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Target } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full flex items-center bg-background rounded-xl py-20 shadow-lg border">
        <div className="w-1/2 pl-20">
          <h1 className="text-7xl font-bold mb-6 tracking-widest">
            Shape Your Future with Excellence
          </h1>
          <p className="text-xl mb-8">
            Nurturing young minds from classes 8th to 12th with expert guidance
            and innovative teaching methods
          </p>
          <div>
            <Button>
              <TransitionLink href="/register">Join Our Journey</TransitionLink>
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_1x.png"
            alt="img"
          />
        </div>
      </div>
      <div className="mt-20">
        <div className="py-10 border-t border-b">
          <div className=" flex gap-10 items-center justify-between py-10 border-l-2 border-r-2 text-gray-500 pl-10">
            <div>
              <Target size={100} />
            </div>
            <p className="text-lg px-10 tracking-wide">
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
