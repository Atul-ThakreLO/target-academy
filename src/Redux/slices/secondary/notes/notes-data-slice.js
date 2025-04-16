import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  notesSelectedId: [],
};

const notesDataSlice = createSlice({
  name: "notesData",
  initialState: initialState,
  reducers: {
    setNotesData: (state, action) => {
      state.data = action.payload;
    },
    setNotesID: (state, action) => {
      state.notesSelectedId = action.payload;
    },
  },
});

export default notesDataSlice.reducer;
export const { setNotesData, setNotesID } = notesDataSlice.actions;
