import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const papersFilterDataSlice = createSlice({
  name: "papersFilterData",
  initialState: initialState,
  reducers: {
    setPapersFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default papersFilterDataSlice.reducer;
export const { setPapersFilterData } = papersFilterDataSlice.actions;
