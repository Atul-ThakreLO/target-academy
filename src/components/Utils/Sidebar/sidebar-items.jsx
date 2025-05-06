import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import { TransitionLink } from "../transition-link";
import { useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const SidebarItems = ({ title, icon, path }) => {
  const { pathname } = useLocation();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <SidebarMenuItem title={title}>
        <TransitionLink href={path} onClick={() => toggleSidebar()}>
          <SidebarMenuButton
            className="py-5"
            isActive={pathname === path ? "true" : "false"}
          >
            <div className="text-base flex gap-2 items-center">
              {icon}
              {title}
            </div>
          </SidebarMenuButton>
        </TransitionLink>
      </SidebarMenuItem>
      <SidebarSeparator />
    </>
  );
};

export default SidebarItems;
