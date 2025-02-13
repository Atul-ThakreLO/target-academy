import { configureStore } from "@reduxjs/toolkit";
import authStudentSlice from "./slices/Student/auth-status-slice";
import studenSlice from "./slices/Student/student-slice";

export const store = configureStore({
  reducer: {
    authStudent: authStudentSlice,
    studenData: studenSlice,
  },
});
