import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const notesSelectedIDSlice = createSlice({
  name: "notesSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default notesSelectedIDSlice.reducer;
export const { setSelectedID } = notesSelectedIDSlice.actions;