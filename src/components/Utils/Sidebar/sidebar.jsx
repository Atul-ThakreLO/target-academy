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
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import React from "react";
import { BookCopy, Gauge, Home, NotepadText, Target } from "lucide-react";
import SidebarItems from "./sidebar-items";
import User from "@/components/Student/Sidebar/sidebar-user-item";
import { ScrollArea } from "@/components/ui/scroll-area";

const SideBar = ({ links, user }) => {
  return (
    <Sidebar variant="inset" collapsible="icon" className="student wala">
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
        <ScrollArea>
          <SidebarGroup title="Main">
            <SidebarGroupLabel>Links</SidebarGroupLabel>
            <SidebarMenu>
              {links.map((link, index) => (
                <SidebarItems
                  title={link.title}
                  icon={link.icon}
                  path={link.path}
                  key={index}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      {/* <SidebarRail /> */}
      <SidebarSeparator />
      <SidebarFooter>{user}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default SideBar;
