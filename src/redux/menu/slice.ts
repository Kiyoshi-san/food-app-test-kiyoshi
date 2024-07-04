import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenu: "menu",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    selectMenu: (state = initialState, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { selectMenu } = menuSlice.actions;
export default menuSlice.reducer;
