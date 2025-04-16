import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const assignmentFilterDataSlice = createSlice({
  name: "assignmentFilterData",
  initialState: initialState,
  reducers: {
    setAssignmentFilterData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default assignmentFilterDataSlice.reducer;
export const { setAssignmentFilterData } = assignmentFilterDataSlice.actions;
