import {
  Book,
  BookCopy,
  FileSpreadsheet,
  LayoutDashboard,
  MessageSquareDot,
  NotepadText,
  PanelTopDashed,
  ScanLine,
  StickyNote,
  User,
  Users,
} from "lucide-react";

export const sideBarLinks = [
  { title: "Dashboard", icon: <LayoutDashboard size={22} />, path: "/staff" },
  { title: "Staff", icon: <User size={22} />, path: "/staff/staff" },
  { title: "Students", icon: <Users size={22} />, path: "/staff/students" },
  {
    title: "Control Panel",
    icon: <PanelTopDashed size={22} />,
    path: "/staff/control-panel",
  },
  { title: "Notes", icon: <StickyNote size={22} />, path: "/staff/notes" },
  { title: "Papers", icon: <BookCopy size={22} />, path: "/staff/papers" },
  {
    title: "Assignments",
    icon: <Book size={22} />,
    path: "/staff/assignments",
  },
  {
    title: "Tests",
    icon: <NotepadText size={22} />,
    path: "/staff/tests",
  },
  {
    title: "Event-Notice",
    icon: <MessageSquareDot size={22} />,
    path: "/staff/event-notice",
  },
  {
    title: "Transactions",
    icon: <ScanLine size={22} />,
    path: "/staff/transactions",
  },
  {
    title: "Result",
    icon: <FileSpreadsheet size={22} />,
    path: "/staff/result",
  },
];
