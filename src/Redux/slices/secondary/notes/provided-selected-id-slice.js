import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const providedSelectedIDSlice = createSlice({
  name: "providedSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default providedSelectedIDSlice.reducer;
export const { setSelectedID } = providedSelectedIDSlice.actions;