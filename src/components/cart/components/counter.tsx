import React from "react";
import style from "./counter.module.css";

type TCounter = {
  quantity?: number;
  mini?: boolean;
  setQuantity?: (qty: number) => void;
  onClickMinus?: () => void;
  onClickPlus?: () => void;
};

const Counter = ({
  quantity = 1,
  setQuantity,
  mini = false,
  onClickMinus = () => {},
  onClickPlus = () => {},
}: TCounter) => {
  const handleMinus = () => {
    setQuantity && setQuantity(quantity - 1);
    console.log(quantity);
    onClickMinus();
  };
  const handlePlus = () => {
    setQuantity && setQuantity(quantity + 1);
    onClickPlus();
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
