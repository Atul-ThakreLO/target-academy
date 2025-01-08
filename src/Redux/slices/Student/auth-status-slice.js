import { createSlice } from "@reduxjs/toolkit";


const authStudentSlice = createSlice({
    name: "authStudent",
    initialState: { student: {}, isAuthenticated: false },
    reducers: {
        setStudent: (state, action) => {
            state.student = action.payload;
        },
        setAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    }
})

export const { setStudent, setAuth } = authStudentSlice.actions;
export default authStudentSlice.reducer;