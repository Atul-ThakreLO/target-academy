import React, { useEffect, useState } from "react";
import "../../App.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import Notices from "@/components/Student/MainPage/Notices";
import CardsInstructor from "@/components/Student/MainPage/cards-instructor";
import CardsQLinks from "@/components/Student/MainPage/cards-qlinks";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { useSelector } from "react-redux";
import { greetingsFn } from "@/components/Utils/greetings";

const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState();
  const { student } = useSelector((state) => state.authStudent);

  useEffect(() => {
    setGreeting(greetingsFn());
  }, []);

  return (
    <ScrollArea className="h-[95vh] main-page-scroller">
    {/* <div className="h-[95vh] overflow-y-auto w-full scrollable"> */}
      <section className="py-10">
        <div className="text-5xl font-semibold flex items-center text-center flex-col">
          {greeting} <br /> {student?.StudentInfo?.student_name}
        </div>
        <p className="text-center w-[70%] mx-auto font-light text-lg tracking-wide mt-10 ">
          Welcome to the Science Academy online community! We're thrilled to
          provide this platform as a central resource for all our students.
          Explore the various sections to access valuable learning materials,
          track your progress, and connect with your academic community.
        </p>
      </section>
      <section className="p-3 w-full">
      {/* className="p-3 md:w-[calc(99vw-var(--sidebar-width))]" */}
        <div className="py-4">
          <h1 className="text-center text-4xl font-bold py-6">Notices</h1>
          <div>
            <Notices />
          </div>
        </div>
      </section>
      <section className="mt-10 p-8">
        <div className="">
          <h1 className="text-4xl font-semibold">
            Solve Your Doughts and Queries:{" "}
          </h1>
          <p className="text-sm font-normal tracking-[0.7em] leading-10">
            By contacting Instructors
          </p>
        </div>
        <div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 mt-4 p-10">
            <CardsInstructor
              avatar={"url"}
              name={"Atul Chaudhari"}
              labels={["Chemistry", "Admin"]}
              mail={"atuchaudhari@gmail.com"}
              phone={"1234567890"}
            />
            <CardsInstructor
              avatar={"url"}
              name={"Shubhash Yenurkar"}
              labels={["Mathematics", "Admin"]}
              mail={"shubhashyenurkar@gmail.com"}
              phone={"1234567890"}
            />
            <CardsInstructor
              avatar={"url"}
              name={"Tushar Buche"}
              labels={["Biology", "Admin"]}
              mail={"tusharbuche@gmail.com"}
              phone={"1234567890"}
            />
          </div>
        </div>
      </section>
      <section className="p-8 mt-10 ">
        <div className="border relative rounded-lg shadow-lg p-4">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full translate-x-[5px]"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <div>
            <div className="my-6 relative z-[1]">
              <h1 className="text-4xl font-semibold text-center">
                Look at your Assets
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,300px))] gap-8 mt-4 p-10 justify-center">
                <CardsQLinks
                  title={"Notes"}
                  description={
                    "Find your notes of all subjects. view and read them"
                  }
                  href={"/student/notes"}
                />
                <CardsQLinks
                  title={"Papers"}
                  description={
                    "Find your notes of all subjects. view and read them"
                  }
                  href={"/student/papers"}
                />
                <CardsQLinks
                  title={"Marks"}
                  description={
                    "Find your notes of all subjects. view and read them"
                  }
                  href={"/student/performance"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // </div> */}
    </ScrollArea>
  );
};

export default MainPage;
