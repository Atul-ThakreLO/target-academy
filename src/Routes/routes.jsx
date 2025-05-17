import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/layouts/Home";
import Student from "@/layouts/Student";
import ST_MainPage from "@/pages/Student/main-page";
// import Marks from "@/pages/Student/marks";
import Notes from "@/pages/Student/notes";
import Papers from "@/pages/Student/papers";
import Profile from "@/pages/Student/profile";
import MainPage from "@/pages/Home/main-page";
import About from "@/pages/Home/about";
import Login from "@/pages/Home/login";
import Registration from "@/pages/Home/registration";
import Results from "@/pages/Home/results";
import Career from "@/pages/Home/career";
import Staff from "@/layouts/Staff";
import Dashboard from "@/pages/Staff/dashboard";
import NotesStaff from "@/pages/Staff/notes-staff";
import PapersStaff from "@/pages/Staff/papers-staff";
import AssignmentsStaff from "@/pages/Staff/assignments-staff";
import Transactions from "@/pages/Staff/transactions";
import Result from "@/pages/Staff/result";
import ControlPanel from "@/pages/Staff/control-panel";
import Staffs from "@/pages/Staff/staffs";
import Students from "@/pages/Staff/students";
import Tests from "@/pages/Staff/Tests";
import TestMarks from "@/pages/Staff/test-marks";
import EventNotice from "@/pages/Staff/event-notice";
import StaffRegistration from "@/pages/Home/staff-registration";
import StaffLogin from "@/pages/Home/staff-login";
import Assignments from "@/pages/Student/assignments";
import Marks from "@/pages/Student/Marks";
import NotVerified from "@/pages/not-verified";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Registration />} />
        <Route path="student/login" element={<Login />} />
        <Route path="results" element={<Results />} />
        <Route path="career" element={<Career />} />
      </Route>
      <Route
        path="/staff-registration/:email/:token"
        element={<StaffRegistration />}
      />
      <Route path="/staff/login" element={<StaffLogin />} />
      <Route path="/staff/not-verified" element={<NotVerified />} />

      <Route
        path="/student"
        element={
          // <ProtectedRoute>
          <Student />
          // </ProtectedRoute>
        }
      >
        <Route index element={<ST_MainPage />} />
        <Route path="performance" element={<Marks />} />
        <Route path="notes" element={<Notes />} />
        <Route path="papers" element={<Papers />} />
        <Route path="profile" element={<Profile />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/staff" element={<Staff />}>
        <Route index element={<Dashboard />} />
        <Route path="notes" element={<NotesStaff />} />
        <Route path="papers" element={<PapersStaff />} />
        <Route path="tests" element={<Tests />} />
        <Route path="tests/marks/:id" element={<TestMarks />} />
        <Route path="assignments" element={<AssignmentsStaff />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="result" element={<Result />} />
        <Route path="control-panel" element={<ControlPanel />} />
        <Route path="event-notice" element={<EventNotice />} />
        <Route path="staff" element={<Staffs />} />
        <Route path="students" element={<Students />} />
      </Route>
    </>
  )
);

export default router;
