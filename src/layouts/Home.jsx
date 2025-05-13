import Nav from "@/components/Home/Navbar/Nav";
import NavMobile from "@/components/Home/Navbar/NavMobile";
import { useTheme } from "@/components/theme-provider";
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  let navHeight;
  const [scrollAMount, setScrollAmount] = useState(0);

  const scrollRef = useRef(null);

  const { setTheme, theme } = useTheme();

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

      <div className="hidden md:block">
        <Nav scroller={scrollAMount} />
      </div>
      <div className="block md:hidden">
        <NavMobile scroller={scrollAMount} />
      </div>

      <div className="main-div">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
