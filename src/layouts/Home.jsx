import Nav from "@/components/Home/Nav";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div>
      <div className="background"></div>
      <Nav />
      <div className="main-div">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
