import { createSlice } from "@reduxjs/toolkit";

export type RootActiveNavMenu = {
  navMenuReducer: {
    navMenuActive: boolean;
  };
};

const initialState = {
  navMenuActive: false,
};

const navMenuActiveSlice = createSlice({
  name: "navMenu",
  initialState,
  reducers: {
    activeNavMenu: (state = initialState, action) => {
      console.log("aaa");
      console.log(action.payload);
      console.log("aaa");
      state.navMenuActive = action.payload;
    },
  },
});

export const { activeNavMenu } = navMenuActiveSlice.actions;
export default navMenuActiveSlice.reducer;
