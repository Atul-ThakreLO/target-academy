// import { createSlice } from "@reduxjs/toolkit";

// const authStudentSlice = createSlice({
//   name: "authStudent",
//   initialState: { id: "", isAuthenticated: false },
//   reducers: {
//     setStudentId: (state, action) => {
//       state.id = action.payload;
//     },
//     setAuth: (state, action) => {
//       state.isAuthenticated = action.payload;
//     },
//   },
// });

// export const { setStudentId, setAuth } = authStudentSlice.actions;
// export default authStudentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  student: null,
  isLoading: false,
};

const authStudentSlice = createSlice({
  name: "authStudent",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = !!action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { setStudent, setLoading } = authStudentSlice.actions;
export default authStudentSlice.reducer;