import React from "react";
import style from "./counter.module.css";

type TCounter = {
  quantity?: number;
  setQuantity: (qty: number) => void;
};

const Counter = ({ quantity = 1, setQuantity }: TCounter) => {
  const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={style.container}>
      <div className={style.minus} onClick={handleMinus} />
      <span className={style.quantity}>{quantity}</span>
      <div className={style.plus} onClick={handlePlus} />
    </div>
  );
};

export default Counter;
