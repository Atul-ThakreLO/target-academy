import useStudentAuth from "@/Hooks/use-student-auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import StudentSkelleton from "../Student/student-skelleton";

const ProtectedRoute = ({ children, student }) => {
  if (student) {
    const navigate = useNavigate();
    const { isAuthenticated, isLoading } = useStudentAuth();

    React.useEffect(() => {
      if (!isLoading && !isAuthenticated) {
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
  }

  return children;
};

export default ProtectedRoute;
