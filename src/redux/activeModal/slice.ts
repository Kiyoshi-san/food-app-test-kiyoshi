import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export type RootActiveModal = {
  changeModalActiveReducer: {
    activeModal: boolean;
    modalContent: React.ReactNode;
  };
};

const initialState = {
  activeModal: false,
  modalContent: null,
};

const activeModalSlice = createSlice({
  name: "changeModalActive",
  initialState,
  reducers: {
    changeActiveModal: (state = initialState, action) => {
      state.activeModal = action.payload;
    },
    changeModalContent: (state = initialState, action) => {
      state.modalContent = action.payload;
    },
  },
});

export const { changeActiveModal, changeModalContent } =
  activeModalSlice.actions;

export default activeModalSlice.reducer;
