import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SideBar from "@/components/Utils/Sidebar/sidebar";
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";
import { sideBarLinks } from "@/constants/sidebar-staff-links";
import SidebarStaffUser from "@/components/Staff/SideBar/sidebar-staff-user";
import ProtectedRoutes from "@/lib/Auth/Staff/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setStaff } from "@/Redux/slices/staff/auth-staff-slice";
import { useGetStaff } from "@/Hooks/use-staff";
import { Loader2 } from "lucide-react";

const Staff = () => {
  const { data, isLoading, isFetched, isError, error } = useGetStaff();
  const dispatch = useDispatch();
  const { isLoading: isDataSet } = useSelector((state) => state.authStaff);

  useEffect(() => {
    dispatch(setLoading());
  }, [dispatch]);

  useEffect(() => {
    if (isFetched) {
      dispatch(setStaff(data?.data));
      //window.location.href = "http://localhost:5173";
    }
  }, [isFetched, data, dispatch, isLoading]);

  if (isLoading && !isFetched) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <SideBar
        links={sideBarLinks}
        user={
          isDataSet ? (
            <Loader2 className="animate-spin" />
          ) : (
            <SidebarStaffUser />
          )
        }
      />
      <SidebarInset className="border overflow-hidden">
        <ScrollArea>
          <div className="sticky -top-1 bg-background flex border-b z-40 justify-between items-center px-1 py-2 md:p-0">
            <h1 className=" text-3xl font-medium md:hidden">Target</h1>
            <SidebarTrigger />
          </div>
          <div className="side-main md:px-4 px-2 py-2 pb-20">
            <ProtectedRoutes>
              <Outlet />
            </ProtectedRoutes>
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Staff;
