import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const assignmentDataSlice = createSlice({
  name: "assignmentData",
  initialState: initialState,
  reducers: {
    setAssignmentData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default assignmentDataSlice.reducer;
export const { setAssignmentData } = assignmentDataSlice.actions;
