import { configureStore } from "@reduxjs/toolkit";
// import authStudentSlice from "./slices/Student/auth-status-slice";
import authStudentSlice from "./slices/Student/auth-student-slice";
import studenSlice from "./slices/Student/student-slice";
import jobApplySlice from "./slices/staff/job-apply-slice";
import registrationDataSLice from "./slices/staff/registration-data-slice";
import authStaffSlice from "./slices/staff/auth-staff-slice";
import staffSlice from "./slices/staff/staff-slice";
import notesFilterDataSlice from "./slices/secondary/notes/notes-filter-data-slice";
import notesDataSlice from "./slices/secondary/notes/notes-data-slice";
import tableRowIDsSlice from "./slices/secondary/notes/table-row-ids";
import providednotesFilterDataSlice from "./slices/secondary/notes/provided-notes-filter-data";
import notesSelectedIDSlice from "./slices/secondary/notes/notes-id-slice";
import providedSelectedIDSlice from "./slices/secondary/notes/provided-selected-id-slice";
import papersFilterDataSlice from "./slices/secondary/papers/papers-filter-data-slice";
import papersSelectedIDSlice from "./slices/secondary/papers/papers-selected-id";
import testPaperSelectedIDSlice from "./slices/secondary/test-papers/test-papers-id-slice";
import testsFilterDataSlice from "./slices/secondary/test-papers/tests-filter-data-slice";
import topperProfileSlice from "./slices/secondary/test-papers/topper-profile";
import noticeDataSlice from "./slices/secondary/notice/noticeDataSlice";
import assignmentSelectedIDSlice from "./slices/secondary/assignment/assignment-id-slice";
import assignmentDataSlice from "./slices/secondary/assignment/assignment-data-slice";
import assignmentFilterDataSlice from "./slices/secondary/assignment/assignment-filter-data-slice";
import resultSelectedIDSlice from "./slices/secondary/result/result-id-slice";

export const store = configureStore({
  reducer: {
    authStudent: authStudentSlice,
    authStaff: authStaffSlice,
    studenData: studenSlice,
    staffData: staffSlice,
    jobApply: jobApplySlice,
    registrationData: registrationDataSLice,
    notesFilterData: notesFilterDataSlice,
    notesData: notesDataSlice,
    notesSelectedID: notesSelectedIDSlice,
    providedSelectedID: providedSelectedIDSlice,
    providednotesFilterData: providednotesFilterDataSlice,
    papersFilterData: papersFilterDataSlice,
    papersSelectedID: papersSelectedIDSlice,
    testPaperSelectedID: testPaperSelectedIDSlice,
    testsFilterData: testsFilterDataSlice,
    tableRowIDs: tableRowIDsSlice,
    topperProfile: topperProfileSlice,
    noticeData: noticeDataSlice,
    assignmentSelectedID: assignmentSelectedIDSlice,
    assignmentData: assignmentDataSlice,
    assignmentFilterData: assignmentFilterDataSlice,
    resultSelectedID: resultSelectedIDSlice,
  },
});
