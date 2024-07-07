import React from "react";
import { useTranslation } from "react-i18next";
import { TItem } from "model/restaurantMenu";
import style from "./active-section-item.module.css";
import { currencyConversor } from "utils/currency";

type TActiveSection = {
  currActSecItem: TItem | undefined;
};

const ActiveSection = ({ currActSecItem }: TActiveSection) => {
  const { t } = useTranslation();
  const convertedPrice =
    currencyConversor(currActSecItem?.price || 0, t("locale")) || 0;

  return (
    <div key={currActSecItem?.id} className={style.container}>
      <div className={style.descriptionContainer}>
        <h3>{currActSecItem?.name}</h3>
        <span>{currActSecItem?.description}</span>
        {/* TODO: Adjust the Currency */}
        <span>
          {convertedPrice.toLocaleString(t("locale"), {
            style: "currency",
            currency: t("currency"),
          })}
        </span>
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

export default ActiveSection;
