import { TItem } from "model/restaurantMenu";
import React from "react";
import style from "./modal-active-item.module.css";
import { useTranslation } from "react-i18next";
import ModifierOption from "./ModifierOption";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ModalActiveItem = ({ currActSecItem }: TActiveSectionItem) => {
  const { t } = useTranslation();
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
        {currActSecItem?.modifiers?.map((modifier) => (
          <div key={modifier.id}>
            <div className={style.chooseOptionContainer}>
              <h2>{modifier.name}</h2>
              <p>{t("selectOptions", { count: modifier.maxChoices })}</p>
            </div>
            <div className={style.optionsContainer}>
              <ModifierOption options={modifier.items} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModalActiveItem;
