import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staff: { email: "", password: "" },
  info: {
    name: "",
    mobile: "",
    subjects: "",
    qualification: "",
  },
};

const registrationDataSLice = createSlice({
  name: "registrationData",
  initialState: initialState,
  reducers: {
    setStaff: (state, action) => {
      state.staff.email = action.payload.email;
      state.staff.password = action.payload.password;
    },
    setStaffInfo: (state, action) => {
      state.info.name = action.payload.name;
      state.info.mobile = action.payload.mobile;
      state.info.subjects = action.payload.subjects;
      state.info.qualification = action.payload.qualification;
    },
  },
});

export const { setStaff, setStaffInfo } = registrationDataSLice.actions;
export default registrationDataSLice.reducer;
