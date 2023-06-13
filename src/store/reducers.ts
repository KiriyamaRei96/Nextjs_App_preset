import testSlice from "@/app/Test/slice/slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
  [testSlice.name]: testSlice.reducer,
});
