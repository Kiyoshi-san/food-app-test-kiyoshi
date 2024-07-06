import React, { ReactNode, useState } from "react";
import style from "./modal.module.css";

type TModal = { children: ReactNode; closeIcon?: boolean; opened?: boolean };

const Modal = ({ children, closeIcon = true, opened = true }: TModal) => {
  const [openedModal, setOpenedModal] = useState<boolean>(opened);

  return (
    <div className={`${style.container} ${openedModal ? style.opened : ""}`}>
      <div className={style.modal}>
        <i className={style.closeIcon} onClick={() => setOpenedModal(false)} />
        {children}
      </div>
      <div className={style.overlay} onClick={() => setOpenedModal(false)} />
    </div>
  );
};

export default Modal;
