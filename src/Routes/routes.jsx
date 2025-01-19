import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@/layouts/Home";
import Student from "@/layouts/Student";
import ST_MainPage from "@/pages/Student/MainPage";
import Marks from "@/pages/Student/Marks";
import Notes from "@/pages/Student/Notes";
import Papers from "@/pages/Student/Papers";
import Profile from "@/pages/Student/Profile";
import MainPage from "@/pages/Home/MainPage";
import About from "@/pages/Home/About";
import Login from "@/pages/Home/Login";
import ProtectedRoute from "@/components/Utils/protected-route";
import Registration from "@/pages/Home/registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/student"
        element={
          <ProtectedRoute>
            <Student />
          </ProtectedRoute>
        }
      >
        <Route index element={<ST_MainPage />} />
        <Route path="about" element={<About />} />
        <Route path="performance" element={<Marks />} />
        <Route path="notes" element={<Notes />} />
        <Route path="papers" element={<Papers />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Route>
    </>
  )
);

export default router;
