import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const papersSelectedIDSlice = createSlice({
  name: "papersSelectedID",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default papersSelectedIDSlice.reducer;
export const { setSelectedID } = papersSelectedIDSlice.actions;