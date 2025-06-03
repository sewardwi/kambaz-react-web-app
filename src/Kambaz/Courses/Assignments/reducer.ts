/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
}
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        available: assignment.available,
        due: assignment.due,
        points: assignment.points,
        gradeDisplay: assignment.gradeDisplay,
        submissionType: assignment.submissionType,
        entryOptions: assignment.entryOptions,
        assignTo: assignment.assignTo,
        dueDateTime: assignment.dueDateTime,
        availableDateTime: assignment.availableDateTime,
        untilDateTime: assignment.untilDateTime,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log("updating assignment");
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  }
});
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;