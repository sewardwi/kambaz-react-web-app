/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
  showEnrollments: false,
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
    enrollUser: (state, { payload: { courseId, userId } }) => {
      const newEnrollment: any = {
        _id: uuidv4(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollUser: (state, { payload: { courseId, userId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e.user != userId || e.course != courseId);
    },
    toggleShowEnrollments: (state) => {
      state.showEnrollments = !state.showEnrollments;
    }
  },
});
export const { enrollUser, unenrollUser, toggleShowEnrollments, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;