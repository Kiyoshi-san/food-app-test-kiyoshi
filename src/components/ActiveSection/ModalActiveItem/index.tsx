import { TItem } from "model/restaurantMenu";
import React from "react";
import style from "./modal-active-item.module.css";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ModalActiveItem = ({ currActSecItem }: TActiveSectionItem) => {
  return (
    <section className={style.container}>
      {!!currActSecItem?.images.length && (
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
        <div className={style.chooseOptionContainer}>
          {currActSecItem?.modifiers?.map((modifier) => (
            <div key={modifier.id} className={style.title}>
              <h2>{modifier.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalActiveItem;
