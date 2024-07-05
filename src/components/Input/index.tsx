import { t } from "i18next";
import magnify from "assets/images/magnify.svg";
import React, { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <img src={magnify} />
      <input type="text" placeholder={t("searchMenuItems")} {...props} />
    </>
  );
};

export default Input;
