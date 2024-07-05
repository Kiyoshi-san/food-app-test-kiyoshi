import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeMenuSection: 242403, // Burgers id
};

const menuSectionSlice = createSlice({
  name: "menuSection",
  initialState,
  reducers: {
    selectMenuSection: (state = initialState, action) => {
      state.activeMenuSection = action.payload;
    },
  },
});

export const { selectMenuSection } = menuSectionSlice.actions;
export default menuSectionSlice.reducer;
