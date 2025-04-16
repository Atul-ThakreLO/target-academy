import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topper: null,
};

const topperProfileSlice = createSlice({
  name: "topperProfile",
  initialState: initialState,
  reducers: {
    setTopper: (state, action) => {
      state.topper = action.payload;
    },
  },
});

export default topperProfileSlice.reducer;
export const { setTopper } = topperProfileSlice.actions;
