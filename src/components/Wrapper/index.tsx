import React, { ReactNode } from "react";
import style from "./wrapper.module.css";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};

export default Wrapper;
