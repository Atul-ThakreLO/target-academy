import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OfficeStaffInfo: {},
  email: "",
  id: "",
};

const staffSlice = createSlice({
  name: "staffData",
  initialState: initialState,
  reducers: {
    setStaffData: (state, action) => {
      (state.OfficeStaffInfo = action.payload.OfficeStaffInfo),
        (state.email = action.payload.email),
        (state.id = action.payload.id);
    },
  },
});

export const { setStaffData } = staffSlice.actions;
export default staffSlice.reducer;
