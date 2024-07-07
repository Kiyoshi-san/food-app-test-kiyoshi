import React from "react";
import Counter from "components/cart/components/counter";
import style from "./bottom-cart.module.css";
import Button from "components/ui/Button";
import { useDispatch, useSelector } from "react-redux";

type TBottomCart = {
  buttonText: string;
  onClick?: () => void;
};

const BottomCart = ({ buttonText, onClick = () => {} }: TBottomCart) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={style.container}>
      <div className={style.addButton}>
        <Button text={buttonText} onClick={handleClick} />
      </div>
    </div>
  );
};

export default BottomCart;
