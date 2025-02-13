import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SideBar from "@/components/Utils/Sidebar/sidebar";
import React from "react";
import SideBarUserItem from "@/components/Student/Sidebar/sidebar-user-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";
import { VelocityScroll } from "@/components/ui/marquee-text";
import { sideBarLinks } from "@/constants/sidebar-staff-links";

const Staff = () => {
  
  return (
    <SidebarProvider>
      <SideBar links={sideBarLinks} user={<SideBarUserItem />} />
      <SidebarInset className="border overflow-hidden">
        <ScrollArea>
          <div className="sticky top-0 bg-background flex border-b z-40">
            <SidebarTrigger />
          </div>
          <div className="side-main px-4 py-2 ">
            <Outlet />
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Staff;
