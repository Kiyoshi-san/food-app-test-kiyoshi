import React from "react";
import { TItem } from "model/restaurantMenu";
import style from "./active-section-item.module.css";

type TActiveSection = {
  currActSecItem: TItem | undefined;
};

const ActiveSection = ({ currActSecItem }: TActiveSection) => {
  return (
    <div key={currActSecItem?.id} className={style.container}>
      <div className={style.descriptionContainer}>
        <h3>{currActSecItem?.name}</h3>
        <span>{currActSecItem?.description}</span>
        {/* TODO: Adjust the Currency */}
        <span>{currActSecItem?.price}</span>
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
