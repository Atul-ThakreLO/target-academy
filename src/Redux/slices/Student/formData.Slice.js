import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: { student: {}, info: {}, subjects: []},
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
  },
});

export const { setStudent, setInfo, setSubjects } = formDataSlice.actions;
export default formDataSlice.reducer;
