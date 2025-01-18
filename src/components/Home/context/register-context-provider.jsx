import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const RegisterContext = createContext({
  formData: {},
  setFormData: () => {},
  stage: 0,
  setStage: () => {},
  stageStatus: {},
  setStageStatus: () => {},
});

const RegisterContextProvider = ({ children }) => {
  const [stage, setStage] = useState(0);
  const [formData, setFormData] = useState({
    student: {},
    info: {},
    subjects: [],
  });
  const [stageStatus, setStageStatus] = useState({});

  return (
    <RegisterContext.Provider
      value={{
        formData,
        setFormData,
        stage,
        setStage,
        stageStatus,
        setStageStatus,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => {
  const context = useContext(RegisterContext);
  // console.log(context);
  if (!context) {
    return toast.error("some error occured in context");
  }
  return context;
};

export default RegisterContextProvider;
