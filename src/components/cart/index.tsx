import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./cart.module.css";
import { useTranslation } from "react-i18next";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  RootCart,
} from "../../redux/cart/slice";
import Counter from "./components/counter";
import { useFormatPrice } from "hooks/currency/useFormatPrice";
import { currencyConversor } from "utils/currency";
import Button from "components/ui/Button";

const Cart = () => {
  const dispatch = useDispatch();

  const formatPrice = useFormatPrice;

  const { cart } = useSelector((state: RootCart) => state.cartReducer);
  const [quantity, setQuantity] = useState<number>(1);

  const { t } = useTranslation();
  const [totalItems, setTotalItems] = useState<number>();

  const converPrice = (price: number) => {
    const locale = t("locale") || "en-US"; // fallback to "en-US"
    const currency = t("currency") || "USD"; // fallback to "USD"

    const convertedPrice = currencyConversor(price || 0, locale) || 0;

    return convertedPrice.toLocaleString(t("locale"), {
      style: "currency",
      currency: currency,
    });
  };

  useEffect(() => {
    setTotalItems(
      cart.products.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0)
    );
  });

  const handleClickPlus = (id: number) => {
    const product = cart.products.find((prod) => prod.id === id);
    dispatch(increaseProductQuantity(product));
  };

  const handleClickMinus = (id: number) => {
    const product = cart.products.find((prod) => prod.id === id);
    dispatch(decreaseProductQuantity(product));
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>{t("basket")}</h2>
      </div>
      {cart.products.length ? (
        <>
          <div className={style.productsContainer}>
            {cart.products.map((product) => (
              <div key={product.id} className={style.pricesContainer}>
                <div className={style.leftPanel}>
                  <h3>{product.name}</h3>
                  <p>{t("with", { item: product.additionalOptionName })}</p>
                  <div className={style.counterContainer}>
                    <Counter
                      quantity={product.quantity}
                      mini={true}
                      onClickPlus={() => handleClickPlus(product.id)}
                      onClickMinus={() => handleClickMinus(product.id)}
                    />
                  </div>
                </div>
                <div className={style.rightPanel}>
                  <span>{converPrice(product.total)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={style.totalContainer}>
            <div className={style.subtotal}>
              <span className={style.label}>{t("subtotal")}</span>
              <span className={style.price}>{converPrice(cart.total)}</span>
            </div>
            <div className={style.total}>
              <span className={style.label}>{t("total")}</span>
              <span className={style.price}>{converPrice(cart.total)}</span>
            </div>
          </div>
        </>
      ) : (
        <div className={style.emptyCart}>
          <span>{t("emptyCart")}</span>
        </div>
      )}
      <div className={style.checkoutContainer}>
        <Button text={t("checkout")} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Cart;
