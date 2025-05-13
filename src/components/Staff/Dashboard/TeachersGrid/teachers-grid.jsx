import React, { useEffect, useRef } from "react";
import nickName from "@/components/Utils/nick-name";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TransitionLink } from "@/components/Utils/transition-link";
import { Loader2, Settings } from "lucide-react";
import { useGetAllStaff } from "@/Hooks/use-staff";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import StaffProfileSheet from "../../Profile/staff-profile-sheet";

// const teachers = [
//   { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUuYcnZ-xqlGZiDZvuUy_iLx3Nj6LSaZSzQ&s"},
//   { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"},
//   { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s"},
//   { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7__AYALUiCLxKF5perbqGZdn56Oxycl2B0Q&s"},
//   { name: "Atul chaudhari", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDRlp-KGr_M94k_oor4Odjn2UzbAS7n1YoA&s"},
// ];

const TeachersGrid = () => {
  const avatar = useRef(null);
  const grid = useRef(null);
  const { data, isLoading } = useGetAllStaff();

  useEffect(() => {
    console.log(avatar.current?.offsetWidth);
  }, []);

  const count = data?.data?.length + 1 || 6;
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
      {isLoading
        ? Array.from({ length: 5 }, (_, i) => (
            <Avatar
              ref={avatar}
              className="border-2 cursor-pointer hover:border-foreground"
              key={i}
            >
              <AvatarFallback>Lo</AvatarFallback>
              <AvatarImage src={""} alt={""} />
            </Avatar>
          ))
        : data.data.map((teacher) => (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-start">
                  <Avatar
                    ref={avatar}
                    className="border-2 cursor-pointer hover:border-foreground"
                    key={teacher.OfficeStaffInfo.name}
                  >
                    <AvatarFallback>
                      {nickName(teacher.OfficeStaffInfo.name)}
                    </AvatarFallback>
                    <AvatarImage
                      src={teacher.OfficeStaffInfo.avtar_url}
                      alt={teacher.OfficeStaffInfo.name}
                    />
                  </Avatar>
                </Button>
              </SheetTrigger>
              <StaffProfileSheet data={teacher} />
            </Sheet>
          ))}
      <TransitionLink href={"/staff/staff"}>
        <Settings size={21} />
      </TransitionLink>
    </div>
  );
};

export default TeachersGrid;
