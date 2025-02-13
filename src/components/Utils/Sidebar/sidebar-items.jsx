import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import React from "react";
import { TransitionLink } from "../transition-link";
import { useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const SidebarItems = ({ title, icon, path }) => {
  const { pathname } = useLocation();
  return (
    <>
      <SidebarMenuItem title={title}>
        <TransitionLink href={path}>
          <SidebarMenuButton
            className="py-5"
            isActive={pathname === path ? "true" : "false"}
            // onClick={() => setOpenMobile(false)}
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
