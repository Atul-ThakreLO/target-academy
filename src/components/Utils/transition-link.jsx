import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const TransitionLink = ({ href, children, ...props }) => {
  const navigate = useNavigate();
  function sleep(ms) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleClick = async (e) => {
    e.preventDefault();

    document.querySelector(".side-main")?.classList.add("fade-out");
    await sleep(300);
    navigate(href);
    await sleep(100);
    document.querySelector(".side-main")?.classList.remove("fade-out");

    // await sleep(200);
    // await sleep(0).then(() => {
    //   document.querySelector(".side-main")?.classList.remove("fade-out");
    //   document.querySelector(".side-main")?.classList.remove("fade-in");
    // });
  };
  return (
    <Link to={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const TransitionNavLink = ({ href, children, ...props }) => {
  const navigate = useNavigate();
  function sleep(ms) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleClick = async (e) => {
    e.preventDefault();
    document.querySelector(".main-div")?.classList.add("fade-out");
    await sleep(300);
    navigate(href);
    await sleep(100);
    document.querySelector(".main-div")?.classList.remove("fade-out");
    // await sleep(200);
    // await sleep(0).then(() => {
    //   document.querySelector(".side-main")?.classList.remove("fade-out");
    //   document.querySelector(".side-main")?.classList.remove("fade-in");
    // });
  };
  return (
    <NavLink
      to={href}
      onClick={handleClick}
      className={({ isActive, isPending }) => {
        return `hover:text-foreground ${isActive ? "text-foreground" : ""}`;
      }}
    >
      {children}
    </NavLink>
  );
};

export { TransitionLink, TransitionNavLink };
