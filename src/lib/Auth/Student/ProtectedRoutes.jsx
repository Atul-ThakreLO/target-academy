import { Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector(
    (state) => state.authStudent
  );

  if (isLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  } else if (!isAuthenticated) {
    return <Navigate to="/student/login" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoutes;
