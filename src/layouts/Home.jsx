import Nav from "@/components/Home/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = () => {
  let navHeight;
  useEffect(() => {
    navHeight = document.querySelector("nav").offsetHeight;
  }, [Nav, navHeight]);
  return (
    <div>
      <div className="background"></div>
      <Nav />
      <p>{navHeight}</p>
      <ScrollArea className={`main-div h-[calc(100vh-48px)]`}>
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default Home;
