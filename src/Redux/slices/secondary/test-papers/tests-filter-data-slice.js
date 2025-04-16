import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const testsFilterDataSlice = createSlice({
  name: "testsFilterData",
  initialState: initialState,
  reducers: {
    setTestsFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default testsFilterDataSlice.reducer;
export const { setTestsFilterData } = testsFilterDataSlice.actions;
