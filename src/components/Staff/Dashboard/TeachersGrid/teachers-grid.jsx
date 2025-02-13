import React, { useEffect, useRef } from "react";
import nickName from "@/components/Utils/nick-name";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Settings } from "lucide-react";

const teachers = [
  { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUuYcnZ-xqlGZiDZvuUy_iLx3Nj6LSaZSzQ&s"},
  { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"},
  { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s"},
  { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7__AYALUiCLxKF5perbqGZdn56Oxycl2B0Q&s"},
  { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"},
];

const TeachersGrid = () => {
  const avatar = useRef(null);
  const grid = useRef(null);

  useEffect(() => {
    console.log(avatar.current?.offsetWidth);
  }, []);

  const count = teachers.length + 1;
  const width = avatar.current?.offsetWidth;

  const mouseOver = (e) => {
    grid.current.style.gridTemplateColumns = `repeat(${count}, ${
      width * 1.1
    }px)`;
  };

  const mouseLeave = (e) => {
    grid.current.style.gridTemplateColumns = `repeat(${count}, ${width / 2}px)`;
  };

  const style = { gridTemplateColumns: `repeat(${count}, ${width / 2}px)` };

  return (
    <div
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      ref={grid}
      className={`grid transition-[grid-template-columns] duration-300 px-5 items-center`}
      style={style}
    >
      {teachers.map((tecaher) => (
        <Avatar
          ref={avatar}
          className="border-2 cursor-pointer hover:border-foreground"
          key={tecaher.name}
        >
          <AvatarFallback>{nickName(tecaher.name)}</AvatarFallback>
          <AvatarImage src={tecaher.src} alt="" />
        </Avatar>
      ))}
      <TransitionLink href={"/staff/staff"}>
        <Settings size={21} />
      </TransitionLink>
    </div>
  );
};

export default TeachersGrid;
