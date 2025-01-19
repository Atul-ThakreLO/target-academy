import React from "react";

import { Link, NavLink } from "react-router-dom";
import { TransitionNavLink } from "../Utils/transition-link";

const Nav = () => {
  return (
    <div className="pb-16 nav">
      <div className="fixed w-[100%] text-black py-3">
        <nav className="w-[95%] mx-auto flex justify-between items-center">
          <div className="logo">
            <h1 className="text-5xl">Logo</h1>
          </div>
          <ul className="flex gap-20 pr-20 text-muted-foreground">
            <li>
              <TransitionNavLink href="/">Home</TransitionNavLink>
            </li>
            <li>
              <TransitionNavLink href="/about">About</TransitionNavLink>
            </li>
            <li>
              <TransitionNavLink href="/register">Register</TransitionNavLink>
            </li>
            <li>
              <TransitionNavLink href="/login">Login</TransitionNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
