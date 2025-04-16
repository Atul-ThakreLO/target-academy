import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const assignmentSelectedIDSlice = createSlice({
  name: "assignmentSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default assignmentSelectedIDSlice.reducer;
export const { setSelectedID } = assignmentSelectedIDSlice.actions;