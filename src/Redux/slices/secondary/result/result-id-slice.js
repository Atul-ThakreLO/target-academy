import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const resultSelectedIDSlice = createSlice({
  name: "resultSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default resultSelectedIDSlice.reducer;
export const { setSelectedID } = resultSelectedIDSlice.actions;