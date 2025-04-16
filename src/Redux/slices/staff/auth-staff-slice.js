// import { createSlice } from "@reduxjs/toolkit";

// const authStaffSlice = createSlice({
//   name: "authStaff",
//   initialState: { id: "", isAuthenticated: false },
//   reducers: {
//     setStaffId: (state, action) => {
//       state.id = action.payload;
//     },
//     setAuth: (state, action) => {
//       state.isAuthenticated = action.payload;
//     },
//   },
// });

// export const { setStaffId, setAuth } = authStaffSlice.actions;
// export default authStaffSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  staff: null,
  isLoading: false,
};

const authStaffSlice = createSlice({
  name: "authStaff",
  initialState,
  reducers: {
    setStaff: (state, action) => {
      state.staff = action.payload;
      state.isAuthenticated = !!action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { setStaff, setLoading } = authStaffSlice.actions;
export default authStaffSlice.reducer;