import { Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading, staff, isVerified } = useSelector(
    (state) => state.authStaff
  );

  if (isLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  } else if (!isAuthenticated) {
    return <Navigate to="/staff/login" replace />;
  } else if (!isVerified) {
    console.log(isVerified);
    
    return <Navigate to="/staff/not-verified" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoutes;
