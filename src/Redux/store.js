import { configureStore } from "@reduxjs/toolkit";
import formDataSlice from "./slices/Student/formData.Slice";
import otpSlice from "./slices/Student/otp.Slice";
import authStudentSlice from "./slices/Student/auth-status-slice";
import studentInfoSLice from "./slices/Student/student-info-slice";

export const store = configureStore({
  reducer: {
    formData: formDataSlice,
    otpData: otpSlice,
    authStudent: authStudentSlice,
    studentInfo: studentInfoSLice,
  },
});
