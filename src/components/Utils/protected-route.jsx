import useStudentAuth from "@/Hooks/use-student-auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentSkelleton from "../Student/student-skelleton";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useStudentAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log("navigating");

      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div>
        <StudentSkelleton />
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
