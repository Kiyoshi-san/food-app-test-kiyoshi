import React from "react";
import { useTranslation } from "react-i18next";
import { TItem } from "model/restaurantMenu";
import style from "./active-section-item.module.css";
import { currencyConversor } from "utils/currency";
import ModalActiveItem from "../ModalActiveItem";

import { useDispatch } from "react-redux";
import {
  changeActiveModal,
  changeModalContent,
} from "../../../redux/activeModal/slice";
import { useFormatPrice } from "hooks/currency/useFormatPrice";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ActiveSectionItem = ({ currActSecItem }: TActiveSectionItem) => {
  const dispatch = useDispatch();
  const formatPrice = useFormatPrice;

  const handleOpenModal = (open: boolean, currActSecItem: TItem) => {
    dispatch(changeActiveModal(open));

    if (currActSecItem) {
      // Creating the component from clicked component
      const component = <ModalActiveItem currActSecItem={currActSecItem} />;

      dispatch(changeModalContent(component));
    }
  };

  return (
    <div
      key={currActSecItem?.id}
      className={style.container}
      onClick={() => handleOpenModal(true, currActSecItem as TItem)}
    >
      <div className={style.descriptionContainer}>
        <h3>{currActSecItem?.name}</h3>
        <span>{currActSecItem?.description}</span>
        {/* TODO: Adjust the Currency */}
        <span>{formatPrice(currActSecItem?.price)}</span>
      </div>
      {!!currActSecItem?.images?.length && currActSecItem?.images[0]?.image && (
        <div className={style.imgContainer}>
          {currActSecItem?.images[0]?.image && (
            <img src={currActSecItem?.images[0].image} />
          )}
        </div>
      )}
    </div>
  );
};

export default ActiveSectionItem;
