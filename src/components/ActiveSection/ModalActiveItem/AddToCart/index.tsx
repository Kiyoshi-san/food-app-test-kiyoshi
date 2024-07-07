import React from "react";
import Counter from "components/cart/components/counter";
import style from "./add-to-cart.module.css";
import Button from "components/ui/Button";
import { useDispatch } from "react-redux";
import { changeActiveModal } from "../../../../redux/activeModal/slice";

type TAddToCart = {
  quantity: number;
  setQuantity: (qty: number) => void;
  buttonText: string;
  onClick: () => void;
};

const AddToCart = ({
  quantity,
  setQuantity,
  buttonText,
  onClick,
}: TAddToCart) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeActiveModal(false));
    onClick();
  };

  return (
    <div className={style.container}>
      <div className={style.counter}>
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className={style.addButton}>
        <Button text={buttonText} onClick={handleClick} />
      </div>
    </div>
  );
};

export default AddToCart;
