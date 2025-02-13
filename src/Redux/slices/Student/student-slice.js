import { createSlice } from "@reduxjs/toolkit";

const studenSlice = createSlice({
  name: "studenData",
  initialState: {
    StudentFeesPaid: {},
    StudentInfo: {},
    StudentSubjects: [],
    email: "",
    student_id: "",
  },
  reducers: {
    setStudent: (state, action) => {
      state.StudentFeesPaid = action.payload.StudentFeesPaid;
      state.StudentInfo = action.payload.StudentInfo;
      state.StudentSubjects = action.payload.StudentSubjects;
      state.email = action.payload.email;
      state.student_id = action.payload.student_id;
    },
  },
});

export const { setStudent } = studenSlice.actions;
export default studenSlice.reducer;
