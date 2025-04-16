import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const testPaperSelectedIDSlice = createSlice({
  name: "testPaperSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default testPaperSelectedIDSlice.reducer;
export const { setSelectedID } = testPaperSelectedIDSlice.actions;