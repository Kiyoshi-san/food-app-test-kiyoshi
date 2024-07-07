import React, { ReactNode, useState } from "react";
import style from "./modal.module.css";

type TModal = {
  children: ReactNode;
  closeIcon?: boolean;
  activeModal?: boolean;
  handleCloseModal: (activeModal: boolean) => void;
};

const Modal = ({
  children,
  closeIcon = true,
  activeModal = false,
  handleCloseModal,
}: TModal) => {
  return (
    <div className={`${style.container} ${activeModal ? style.active : ""}`}>
      <div className={style.modal}>
        {closeIcon && (
          <i
            className={style.closeIcon}
            onClick={() => handleCloseModal(false)}
          />
        )}
        {children}
      </div>
      {/* <div className={style.overlay} onClick={() => handleCloseModal(false)} /> */}
    </div>
  );
};

export default Modal;
