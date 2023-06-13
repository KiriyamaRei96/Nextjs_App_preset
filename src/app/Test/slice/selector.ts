import { RootState } from "@/store";
import { initialState } from "./slice";
import { createSelector } from "@reduxjs/toolkit";

export const testSelector = (state: RootState) => state.test || initialState;
export const testItem = createSelector(
  [testSelector],
  (state) => state.testItem
);
