import { createSlice } from "@reduxjs/toolkit";

export type RootActiveModal = {
  changeModalActiveReducer: {
    activeModal: boolean;
  };
};

const initialState = {
  activeModal: false,
};

const activeModalSlice = createSlice({
  name: "changeModalActive",
  initialState,
  reducers: {
    changeActiveModal: (state = initialState, action) => {
      state.activeModal = action.payload;
    },
  },
});

export const { changeActiveModal } = activeModalSlice.actions;

export default activeModalSlice.reducer;
