import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const notesFilterDataSlice = createSlice({
  name: "notesFilterData",
  initialState: initialState,
  reducers: {
    setNotesFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default notesFilterDataSlice.reducer;
export const { setNotesFilterData } = notesFilterDataSlice.actions;
