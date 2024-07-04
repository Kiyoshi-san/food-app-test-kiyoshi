import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testState: "",
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    selectTest: (state = initialState, action) => {
      state.testState = "test";
    },
  },
});

export const { selectTest } = testSlice.actions;
export default testSlice.reducer;
