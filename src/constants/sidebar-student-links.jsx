import { BookCopy, Gauge, Home, NotepadText } from "lucide-react";

export const sideBarLinks = [
  { title: "Home", icon: <Home size={22} />, path: "/student" },
  { title: "Notes", icon: <NotepadText size={22} />, path: "/student/notes" },
  { title: "Papers", icon: <BookCopy size={22} />, path: "/student/papers" },
  {
    title: "PPerformance",
    icon: <Gauge size={22} />,
    path: "/student/performance",
  },
];
