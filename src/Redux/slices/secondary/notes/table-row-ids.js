import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIDs: [],
};

const tableRowIDsSlice = createSlice({
  name: "tableRowIDs",
  initialState: initialState,
  reducers: {
    setSelectedID: (state, action) => {
      state.selectedIDs = action.payload;
    },
  },
});

export default tableRowIDsSlice.reducer;
export const { setSelectedID } = tableRowIDsSlice.actions;
