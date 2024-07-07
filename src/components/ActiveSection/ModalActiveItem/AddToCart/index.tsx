import React from "react";
import Counter from "components/cart/components/counter";
import style from "./add-to-cart.module.css";
import Button from "components/ui/Button";

type TAddToCart = {
  quantity: number;
  setQuantity: (qty: number) => void;
  onClick: () => void;
};

const AddToCart = ({ quantity, setQuantity, onClick }: TAddToCart) => {
  return (
    <div className={style.container}>
      <div className={style.counter}>
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className={style.addButton}>
        <Button text="AddtoOrder" onClick={onClick} />
      </div>
    </div>
  );
};

export default AddToCart;
