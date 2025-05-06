import React, { useEffect, useRef, useState } from "react";
import { TransitionLink, TransitionNavLink } from "../../Utils/transition-link";
import { Button } from "../../ui/button";
import { Target } from "lucide-react";

const Nav = ({ scroller }) => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    if (scroller > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [scroller]);

  return (
    <div className="pb-20 nav">
      <div className="fixed w-full text-black pt-3 z-30">
        <nav
          className={`w-[78%] mx-auto flex justify-between items-center px-10 py-4 duration-200 -translate-x-1 ${
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
            <li className="flex gap-20">
              <TransitionNavLink href="/">Home</TransitionNavLink>

              <TransitionNavLink href="/results">Results</TransitionNavLink>

              <TransitionNavLink href="/career">Career</TransitionNavLink>

              <TransitionNavLink href="/about">About</TransitionNavLink>
            </li>
            <li className="flex gap-2">
              <TransitionLink href="/login">
                <Button variant="outline">Login</Button>
              </TransitionLink>
              <TransitionLink href="/register">
                <Button>Register</Button>
              </TransitionLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
