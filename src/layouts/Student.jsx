// import SideBar from "@/components/Student/SideBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import { VelocityScroll } from "@/components/ui/marquee-text";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/Utils/Sidebar/sidebar";
import SideBarUserItem from "@/components/Student/Sidebar/sidebar-user-item";
import { sideBarLinks } from "@/constants/sidebar-student-links";

const Student = () => {

  return (
    <div>
      <SidebarProvider>
        <SideBar links={sideBarLinks} user={<SideBarUserItem />} />
        <SidebarInset className="overflow-hidden">
          <div className="pb-7 overflow-hidden">
            <div className="fixed z-50 flex w-[100%] bg-background px-2 border-b">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mx-2 h-7" />
              <VelocityScroll
                text="Target Academy of Science ||"
                default_velocity={5}
                className="text-center overflow-hidden text-sm font-normal tracking-[0.1em] text-black drop-shadow-sm dark:text-white md:text-sm md:leading-[1rem]"
              />
            </div>
          </div>

          <div className="side-main">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Student;
