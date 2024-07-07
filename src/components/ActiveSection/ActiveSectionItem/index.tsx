import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TItem } from "model/restaurantMenu";
import style from "./active-section-item.module.css";
import { currencyConversor } from "utils/currency";
import Modal from "components/ui/Modal";
import ModalActiveItem from "../ModalActiveItem";

type TActiveSectionItem = {
  currActSecItem: TItem | undefined;
};

const ActiveSectionItem = ({ currActSecItem }: TActiveSectionItem) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const { t } = useTranslation();
  const locale = t("locale") || "en-US"; // fallback to "en-US"
  const currency = t("currency") || "USD"; // fallback to "USD"

  const handleCloseModal = (open: boolean) => {
    setActiveModal(open);
  };

  const convertedPrice =
    currencyConversor(currActSecItem?.price || 0, locale) || 0;

  return (
    <div
      key={currActSecItem?.id}
      className={style.container}
      onClick={() => setActiveModal(true)}
    >
      <div className={style.descriptionContainer}>
        <h3>{currActSecItem?.name}</h3>
        <span>{currActSecItem?.description}</span>
        {/* TODO: Adjust the Currency */}
        <span>
          {convertedPrice.toLocaleString(t("locale"), {
            style: "currency",
            currency: currency,
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
      <Modal activeModal={activeModal} handleCloseModal={handleCloseModal}>
        <ModalActiveItem currActSecItem={currActSecItem} />
      </Modal>
    </div>
  );
};

export default ActiveSectionItem;
