import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFood: "food",
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    selectFood: (state = initialState, action) => {
      state.activeFood = action.payload;
    },
  },
});

export const { selectFood } = foodSlice.actions;
export default foodSlice.reducer;
