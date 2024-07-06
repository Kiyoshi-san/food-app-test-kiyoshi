import { t } from "i18next";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import style from "./input.module.css";

type TInput = {
  imgIcon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: TInput) => {
  return (
    <div className={style.container}>
      {props.imgIcon && <img src={props.imgIcon} />}
      <input type="text" placeholder={t("searchMenuItems")} {...props} />
    </div>
  );
};

export default Input;
