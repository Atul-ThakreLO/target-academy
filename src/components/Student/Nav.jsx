import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="pb-16">
      <div className="fixed w-[100%] text-black py-3">
        <nav className="w-[95%] mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-5xl">
              Logo
            </h1>
          </div>
          <ul className="flex gap-20 pr-20 text-gray-500">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  isActive ? "text-black" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  isActive ? "text-black" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  isActive ? "text-black" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  isActive ? "text-black" : "";
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
