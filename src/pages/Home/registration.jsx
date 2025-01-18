import RegisterContextProvider from "@/components/Home/context/register-context-provider";
import StudentRegister from "@/components/Home/Registration/student-register";
import React from "react";

const Registration = () => {
  return (
    <RegisterContextProvider>
      <StudentRegister />
    </RegisterContextProvider>
  );
};

export default Registration;
