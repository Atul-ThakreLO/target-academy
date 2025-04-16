import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const noticeDataSlice = createSlice({
  name: "noticeData",
  initialState: initialState,
  reducers: {
    setNoticeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default noticeDataSlice.reducer;
export const { setNoticeData } = noticeDataSlice.actions;
