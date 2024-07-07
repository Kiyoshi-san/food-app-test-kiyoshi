import { t } from "i18next";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import style from "./input.module.css";

type TInput = {
  imgIcon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: TInput) => {
  const { type = "text" } = props;
  return (
    <div className={style.container}>
      {type === "radio" ? (
        <div className={style.radioContainer}>
          <input type="radio" {...props} />
        </div>
      ) : type === "text" ? (
        <div className={style.textContainer}>
          {props.imgIcon && <img src={props.imgIcon} />}
          <input type={type} placeholder={t("searchMenuItems")} {...props} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
