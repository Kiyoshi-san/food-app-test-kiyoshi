import { TItem, TModifierItem } from "model/restaurantMenu";
import React, { useEffect, useState } from "react";
import style from "./modal-active-item.module.css";
import { useTranslation } from "react-i18next";
import ModifierOption from "./ModifierOption";
import AddToCart from "./AddToCart";
import { addProduct, RootCart } from "../../../redux/cart/slice";
import { useSelector, useDispatch } from "react-redux";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ModalActiveItem = ({ currActSecItem }: TActiveSectionItem) => {
  const { cart } = useSelector((state: RootCart) => state.cartReducer);

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedOptionObj, setSelectedOptionObj] =
    useState<TModifierItem | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedTotal, setSelectedTotal] = useState<number>(0);

  useEffect(() => {
    if (currActSecItem?.modifiers?.length)
      setSelectedOptionObj(
        currActSecItem?.modifiers[0].items.find(
          (item) => item.id === selectedOption
        ) as TModifierItem
      );
  }, [selectedOption]);

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id: currActSecItem?.id,
        name: currActSecItem?.name,
        price: currActSecItem?.price,
        additionalOptionName: selectedOptionObj?.name,
        additionalOptionPrice: selectedOptionObj?.price,
        quantity: quantity,
        total:
          quantity * (currActSecItem?.price || 0) +
          (selectedOptionObj?.price || 0),
      })
    );
  };

  const { t } = useTranslation();
  return (
    <section className={style.container}>
      {!!currActSecItem?.images?.length && (
        <div className={style.imageContainer}>
          <img src={currActSecItem?.images[0].image} alt="" />
        </div>
      )}
      <div className={style.descriptionContainer}>
        <div className={style.title}>
          <h2>{currActSecItem?.name}</h2>
        </div>
        <div className={style.description}>
          <p>{currActSecItem?.description}</p>
        </div>
      </div>
      <div className={style.modifiersContainer}>
        {currActSecItem?.modifiers?.map((modifier) => (
          <div key={modifier.id}>
            <div className={style.chooseOptionContainer}>
              <h2>{modifier.name}</h2>
              <p>{t("selectOptions", { count: modifier.maxChoices })}</p>
            </div>
            <div className={style.optionsContainer}>
              <ModifierOption
                options={modifier.items}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={style.addToCart}>
        <AddToCart
          quantity={quantity}
          setQuantity={setQuantity}
          onClick={handleAddToCart}
        />
      </div>
    </section>
  );
};

export default ModalActiveItem;
