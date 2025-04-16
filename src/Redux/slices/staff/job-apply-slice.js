import { createSlice } from "@reduxjs/toolkit";

const jobApplySlice = createSlice({
  name: "jobApply",
  initialState: {
    isApplied: false,
    isLoading: false
  },
  reducers: {
    setIsApplied: (state, action) => {
      state.isApplied = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { isApplied, setIsApplied, setIsLoading } = jobApplySlice.actions;
export default jobApplySlice.reducer;
