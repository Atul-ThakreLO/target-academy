import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const providednotesFilterDataSlice = createSlice({
  name: "providednotesFilterData",
  initialState: initialState,
  reducers: {
    setProvidedNotesFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default providednotesFilterDataSlice.reducer;
export const { setProvidedNotesFilterData } = providednotesFilterDataSlice.actions;