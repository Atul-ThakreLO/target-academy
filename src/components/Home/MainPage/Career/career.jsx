import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/Utils/MainPage/section-header";
import { TransitionLink } from "@/components/Utils/transition-link";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";

const Career = () => {
  return (
    <div className="w-full rounded-xl border-2">
      <div className="flex flex-col md:flex-row gap-6 pb-8 md:pb-0">
        <div className="md:w-1/2 flex items-center justify-center bg-background rounded-xl pb-20 pt-14 border">
          <img
            src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_1x.png"
            alt="img"
          />
        </div>
        <div className="md:w-1/2 pt-20">
          <SectionHeader
            icon={<BriefcaseBusiness />}
            title={"Career"}
            heading={"Career Opportunities"}
          />
          {/* <h1 className="text-7xl font-bold mb-6 tracking-widest">
            Career Opportunities
          </h1> */}
          <p className="text-lg mb-8 mt-10 p-8 text-justify">
            We're always looking for passionate educators in Physics, Chemistry,
            and Mathematics who can inspire the next generation of scientists
            and engineers. If you have a postgraduate degree in your subject, a
            proven track record of academic excellence, and the desire to make a
            difference, we want to hear from you.
          </p>
          <div className="flex justify-center">
            <Button>
              <TransitionLink href="/register">
                Join Target Academy
              </TransitionLink>
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Career;
