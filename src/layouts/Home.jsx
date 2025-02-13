import Nav from "@/components/Home/Nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Home = () => {
  let navHeight;
  const [scrollAMount, setScrollAmount] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleNav = (e) => {
      setScrollAmount(scrollRef.current.scrollTop);
    };
    scrollRef.current.addEventListener("scroll", handleNav);
  }, [scrollRef]);

  return (
    <div
      ref={scrollRef}
      className={`scrollable overflow-y-auto h-[100vh] bg-muted`}
    >
      {/* <div className="background"></div> */}
      <Nav scroller={scrollAMount} />
      <div className="main-div">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
