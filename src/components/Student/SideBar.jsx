 import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import React from "react";
import User from "./Sidebar/sidebar-user-item";
import { useLocation } from "react-router-dom";
import { BookCopy, Gauge, Home, NotepadText, Target } from "lucide-react";
import { TransitionLink } from "../Utils/transition-link";
import SidebarItems from "../Utils/Sidebar/sidebar-items";

const SideBar = () => {
  const { pathname } = useLocation();
  const { setOpenMobile } = useSidebar();
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem title="Home">
            <SidebarMenuButton className="h-full pointer-events-none">
              <div>
                <Target className="text-foreground" />
              </div>
              <div className="bg-muted/100 p-2 pl-3 rounded-lg whitespace-nowrap">
                <h1 className="text-2xl font-semibold text-foreground">
                  Target
                </h1>
                <p className="text-foreground">Academy of science</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator className="my-1" />
      <SidebarContent>
        <SidebarGroup title="Main">
          <SidebarGroupLabel>Links</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarItems title={"Home"} icon={<Home/>} path={"/student"} />
            <SidebarMenuItem title="Notes">
              <TransitionLink href="/student/notes">
                <SidebarMenuButton
                  className="py-5"
                  isActive={pathname === "/student/notes" ? "true" : "false"}
                  onClick={() => setOpenMobile(false)}
                >
                  <div className="text-base flex gap-2 items-center">
                    <NotepadText size={22} />
                    Notes
                  </div>
                </SidebarMenuButton>
              </TransitionLink>
            </SidebarMenuItem>
            <SidebarSeparator />
            <SidebarMenuItem title="Papers">
              <TransitionLink href="/student/papers">
                <SidebarMenuButton
                  className="py-5"
                  isActive={pathname === "/student/papers" ? "true" : "false"}
                  onClick={() => setOpenMobile(false)}
                >
                  <div className="text-base flex gap-2 items-center">
                    <BookCopy size={22} />
                    Papers
                  </div>
                </SidebarMenuButton>
              </TransitionLink>
            </SidebarMenuItem>
            <SidebarSeparator />
            <SidebarMenuItem title="Performance">
              <TransitionLink href="/student/performance">
                <SidebarMenuButton
                  className="py-5"
                  isActive={
                    pathname === "/student/performance" ? "true" : "false"
                  }
                  onClick={() => setOpenMobile(false)}
                >
                  <div className="text-base flex gap-2 items-center">
                    <Gauge size={22} />
                    Performance
                  </div>
                </SidebarMenuButton>
              </TransitionLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <User />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
};

export default SideBar;
