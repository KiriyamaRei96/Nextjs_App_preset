import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  testItem: 1,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});
export default testSlice;
