import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
  name: "otpData",
  initialState: { email: "", otp: ""},
  reducers: {
    setOTPData: (state, action) => {
      state.email = action.payload.email;
      state.otp = action.payload.otp;
    },
  },
});

export const { setOTPData } = otpSlice.actions;
export default otpSlice.reducer;
