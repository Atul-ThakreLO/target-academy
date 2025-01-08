import { createSlice } from "@reduxjs/toolkit";

const studentInfoSlice = createSlice({
  name: "studentInfo",
  initialState: { student: {} },
  setStudentInfo: (state, action) => {
    state.student = action.payload;
  },
});

export const { setStudentInfo } = studentInfoSlice.actions;
export default studentInfoSlice.reducer;
