// import SideBar from "@/components/Student/SideBar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import { VelocityScroll } from "@/components/ui/marquee-text";
import { Separator } from "@/components/ui/separator";
import SideBar from "@/components/Utils/Sidebar/sidebar";
import SideBarUserItem from "@/components/Student/Sidebar/sidebar-user-item";
import { sideBarLinks } from "@/constants/sidebar-student-links";
import { useDispatch, useSelector } from "react-redux";
import { useGetStudentById } from "@/Hooks/use-student";
import {
  setLoading,
  setStudent,
} from "@/Redux/slices/Student/auth-student-slice";
import { Loader2 } from "lucide-react";
import ProtectedRoutes from "@/lib/Auth/Student/ProtectedRoutes";

const Student = () => {
  const { data, isLoading, isFetched, isError, error } = useGetStudentById();
  const dispatch = useDispatch();
  const { isLoading: isDataSet } = useSelector((state) => state.authStudent);

  useEffect(() => {
    dispatch(setLoading());
  }, [dispatch]);

  useEffect(() => {
    if (isFetched) {
      // console.log(data?.data);
      dispatch(setStudent(data?.data));
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
    <div>
      <SidebarProvider>
        <SideBar links={sideBarLinks} user={<SideBarUserItem />} />
        <SidebarInset className="overflow-hidden">
          <div className="pb-20 md:pb-7 overflow-hidden">
            <div className="fixed z-50 flex flex-col md:flex-row w-[100%] bg-background px-2 border-b">
              <div className="flex md:hidden w-full justify-between items-center px-1 py-2 border-b">
                <h1 className=" text-3xl font-medium">Target</h1>
                <SidebarTrigger />
              </div>
              <SidebarTrigger className="hidden md:block" />
              <Separator
                orientation="vertical"
                className="mx-2 h-7 hidden md:block"
              />
              <VelocityScroll
                text="Target Academy of Science ||"
                default_velocity={5}
                className="text-center overflow-hidden text-sm font-normal tracking-[0.1em] text-black drop-shadow-sm dark:text-white md:text-sm md:leading-[1rem]"
              />
            </div>
          </div>

          <div className="side-main">
            <ProtectedRoutes>
              <Outlet />
            </ProtectedRoutes>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Student;
