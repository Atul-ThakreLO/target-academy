import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import {
  ChevronsUpDown,
  CircleAlert,
  LogOut,
  Moon,
  Settings,
  Sun,
  SunMoon,
  User2,
  Wrench,
} from "lucide-react";
import StudentEdit from "../student-edit";

import { useTheme } from "@/components/theme-provider";
import { TransitionLink } from "@/components/Utils/transition-link";
import {  useStudentLogout } from "@/Hooks/use-student";
import { useSelector } from "react-redux";
import nickName from "@/components/Utils/nick-name";

const SideBarUserItem = () => {
  const { isMobile } = useSidebar();
  const { setTheme, theme } = useTheme();

  const { StudentInfo } = useSelector((state) => state.studenData);

  function changeTheme(theme) {
    setTheme(theme);
  }

  const mutation = useStudentLogout();

  function logout() {
    mutation.mutate();
  }

  return (
    <div>
      <SidebarMenu>
        <SidebarMenuItem className="border border-border rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton size="lg" className="py-6">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={StudentInfo?.avtar_url}
                    alt={StudentInfo?.public_id}
                  />
                  <AvatarFallback>
                    {nickName(StudentInfo?.student_name)}
                  </AvatarFallback>
                </Avatar>

                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={StudentInfo?.avtar_url}
                      alt={StudentInfo?.public_id}
                    />
                    <AvatarFallback>
                      {nickName(StudentInfo?.student_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="p-1 pl-3 rounded-lg whitespace-nowrap">
                    <h1 className="text-sm font-semibold">Target</h1>
                    <p className="text-gray-500 text-xs">Academy of science</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <TransitionLink href="profile" className="flex gap-2">
                    <User2 />
                    <span>Profile</span>
                  </TransitionLink>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <StudentEdit
                    className={
                      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-gray-100"
                    }
                  />
                </DropdownMenuItem> */}
                <DropdownMenuItem onClick={logout}>
                  <LogOut />
                  LogOut
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon />
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup
                        value={theme}
                        onValueChange={changeTheme}
                      >
                        <DropdownMenuRadioItem value="light">
                          <Sun size={18} />
                          <span>Light</span>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="dark">
                          <Moon size={18} />
                          <span>Dark</span>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="system">
                          <Wrench size={18} />
                          <span>System</span>
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CircleAlert />
                  <TransitionLink href="/student/about">About</TransitionLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};

export default SideBarUserItem;
