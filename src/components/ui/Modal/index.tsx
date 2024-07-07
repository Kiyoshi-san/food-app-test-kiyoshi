import React, { ReactNode, useState } from "react";
import style from "./modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeActiveModal } from "../../../redux/activeModal/slice";
import type { RootActiveModal } from "../../../redux/activeModal/slice";

type TModal = {
  children: ReactNode;
  closeIcon?: boolean;
};

const Modal = ({ children, closeIcon = true }: TModal) => {
  const dispatch = useDispatch();

  const { activeModal } = useSelector(
    (state: RootActiveModal) => state.changeModalActiveReducer
  );

  const handleCloseModal = (open: boolean, event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(changeActiveModal(open));
  };

  return (
    <div className={`${style.container} ${activeModal ? style.active : ""}`}>
      <div className={style.modal}>
        {closeIcon && (
          <i
            className={style.closeIcon}
            onClick={(e) => handleCloseModal(false, e)}
          />
        )}
        {children}
      </div>
      <div
        className={style.overlay}
        onClick={(e) => handleCloseModal(false, e)}
      />
    </div>
  );
};

export default Modal;
