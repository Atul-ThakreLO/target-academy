import Career from "@/components/Home/MainPage/Career/career";
import Contact from "@/components/Home/MainPage/Contact/contact";
import Cources from "@/components/Home/MainPage/Courses/cources";
import Faculty from "@/components/Home/MainPage/Faculties/faculty";
import Features from "@/components/Home/MainPage/Features/features";
import Hero from "@/components/Home/MainPage/Hero/hero";
import AchievementsUpdates from "@/components/Home/MainPage/News-Updates/achievements-updates";
import { Separator } from "@/components/ui/separator";
import React from "react";

const MainPage = () => {
  return (
    <div className="w-[80%] mx-auto pt-10 pb-96">
      <section className="">
        <Hero />
      </section>
      <section className="my-20">
        <Features />
      </section>
      <Separator />
      <section className="my-20">
        <Cources />
      </section>
      <Separator />
      <section className="mt-20 mb-20">
        <AchievementsUpdates />
      </section>
      <section className="mt-20 mb-20">
        <Faculty />
      </section>
      <section className="mt-20 mb-20">
        <Career />
      </section>
      <section className="mt-20 mb-20">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;
