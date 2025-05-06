import { BriefcaseBusiness, CircleAlert, Home, Import, LogIn, Sheet } from "lucide-react";

export const homeLinks = [
  {
    title: "Home",
    icon: <Home size={20} />,
    path: "/",
  },
  {
    title: "Results",
    icon: <Sheet size={20} />,
    path: "/results",
  },
  {
    title: "Career",
    icon: <BriefcaseBusiness size={20} />,
    path: "/career",
  },
  {
    title: "About",
    icon: <CircleAlert size={20} />,
    path: "/about",
  },
  {
    title: "Login",
    icon: <LogIn size={20} />,
    path: "/student/login",
  },
  {
    title: "Register",
    icon: <Import size={20} />,
    path: "/register",
  },
];
