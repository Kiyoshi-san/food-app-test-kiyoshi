import React from "react";
import style from "./counter.module.css";

type TCounter = {
  quantity?: number;
  setQuantity: (qty: number) => void;
  mini?: boolean;
  onClickMinus?: () => void;
  onClickPlus?: () => void;
};

const Counter = ({
  quantity = 1,
  setQuantity,
  mini = false,
  onClickMinus,
  onClickPlus,
}: TCounter) => {
  const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`${style.container} ${mini ? style.mini : ""}`}>
      <div className={style.minus} onClick={handleMinus} tabIndex={0} />
      <span className={style.quantity} tabIndex={1}>
        {quantity}
      </span>
      <div className={style.plus} onClick={handlePlus} tabIndex={2} />
    </div>
  );
};

export default Counter;
