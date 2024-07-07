import React from "react";
import style from "./button.module.css";

type TButton = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: TButton) => {
  return (
    <div className={style.container} onClick={onClick}>
      <span>{text}</span>
    </div>
  );
};

export default Button;
