import React, { useEffect, useRef, useState } from "react";
import { TransitionLink, TransitionNavLink } from "../../Utils/transition-link";
import { Button } from "../../ui/button";
import { CircleAlert, Home, Menu, Sheet, Target, X } from "lucide-react";
import { homeLinks } from "@/constants/home-mobile-link";
import { useLocation, useParams } from "react-router-dom";

const NavMobile = ({ scroller }) => {
  const [shrink, setShrink] = useState(false);
  const [navDialog, setNavDialog] = useState(false);
  const [sidebar, setSidebar] = useState(false);
    const { pathname } = useLocation();

  // useEffect(() => {
  //   console.log(path);
    
  // }, [path])

  useEffect(() => {
    if (navDialog) {
      setTimeout(() => {
        setSidebar(true);
      }, 200);
    }
  }, [navDialog]);

  function handleClose() {
    setSidebar(false);
    setTimeout(() => {
      setNavDialog(false);
    }, 300);
  }

  useEffect(() => {
    if (scroller > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [scroller]);

  return (
    <>
      <div
        className={`absolute z-50 flex bg-black/50 w-full h-screen duration-300 ${
          navDialog ? "block" : "hidden"
        } ${sidebar ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`fixed z-50 -left-1 duration-1000 ${
            sidebar ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="logo flex items-center text-foreground font-semibold p-4">
            <h1 className="text-4xl">Target</h1>
            <Target size={40} className="-mt-5" />
          </div>
        </div>
        <div
          className={`w-[67%] h-full bg-background duration-300 pt-28 px-1 ${
            sidebar ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        >
          <p className="text-sm text-gray-500 ml-2">Links</p>
          <ul className="">
            {homeLinks.map((link, index) => (
              <li className="border-b w-full p-1" key={index}>
                <div className={`rounded-md w-full h-full hover:bg-muted ${link.path === pathname ? "bg-muted text-foreground font-bold" : ""} p-2`}>
                  <TransitionLink
                    href={link.path}
                    className="flex gap-2 items-center text-gray-700"
                    onClick={handleClose}
                  >
                    <>
                      {link.icon}
                      {link.title}
                    </>
                  </TransitionLink>
                </div>
              </li>
            ))}

            {/* <li className="border-b w-full p-1">
              <div className="rounded-md w-full h-full hover:bg-muted p-2">
                <TransitionLink
                  href="/results"
                  className="flex gap-2 items-center"
                >
                  <Sheet size={22} /> Results
                </TransitionLink>
              </div>
            </li>
            <li className="border-b w-full p-1">
              <div className="rounded-md w-full h-full hover:bg-muted p-2">
                <TransitionLink
                  href="/career"
                  className="flex gap-2 items-center"
                >
                  Career
                </TransitionLink>
              </div>
            </li>
            <li className="border-b w-full p-1">
              <div className="rounded-md w-full h-full hover:bg-muted p-2">
                <TransitionLink
                  href="/about"
                  className="flex gap-2 items-center"
                >
                  <CircleAlert size={22} /> About
                </TransitionLink>
              </div>
            </li>
            <li className="border-b w-full p-1">
              <div className="rounded-md w-full h-full hover:bg-muted p-2">
                <TransitionLink
                  href="/login"
                  className="flex gap-2 items-center"
                >
                  <Button variant="outline">Login</Button>
                </TransitionLink>
              </div>
            </li>
            <li className="border-b w-full p-1">
              <div className="rounded-md w-full h-full hover:bg-muted p-2">
                <TransitionLink
                  href="/register"
                  className="flex gap-2 items-center"
                >
                  <Button>Register</Button>
                </TransitionLink>
              </div>
            </li> */}
          </ul>
        </div>
        <div
          role="button"
          aria-label="Close"
          className="w-[33%] h-full"
          onClick={handleClose}
        ></div>
      </div>
      <div className="pb-20 nav">
        <div className="fixed w-full text-black md:pt-3 z-30">
          <nav
            className={`full flex justify-between items-center px-4 md:px-10 py-4 duration-200 -translate-x-1 ${
              shrink
                ? "bg-background rounded-lg outline-[#c9c9c9] outline outline-[0.1px] shadow-lg"
                : ""
            }`}
          >
            <ul className="flex gap-20 text-muted-foreground items-center justify-between w-full">
              <li className="logo flex items-center text-foreground font-semibold">
                <h1 className="text-4xl">Target</h1>
                <Target size={40} className="-mt-5" />
              </li>
              <li>
                <Button variant="ghost" onClick={() => setNavDialog(true)}>
                  <Menu />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
// <li className="flex gap-20">
//   <TransitionNavLink href="/">Home</TransitionNavLink>

//   <TransitionNavLink href="/results">Results</TransitionNavLink>

//   <TransitionNavLink href="/career">Career</TransitionNavLink>

//   <TransitionNavLink href="/about">About</TransitionNavLink>
// </li>
// <li className="flex gap-2">
//   <TransitionLink href="/login">
//     <Button variant="outline">Login</Button>
//   </TransitionLink>
//   <TransitionLink href="/register">
//     <Button>Register</Button>
//   </TransitionLink>
// </li>
export default NavMobile;
