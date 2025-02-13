import { createSlice } from "@reduxjs/toolkit";

const authStudentSlice = createSlice({
  name: "authStudent",
  initialState: { student_id: "", isAuthenticated: false },
  reducers: {
    setStudentId: (state, action) => {
      state.student_id = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setStudentId, setAuth } = authStudentSlice.actions;
export default authStudentSlice.reducer;
