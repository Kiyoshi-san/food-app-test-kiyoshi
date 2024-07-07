import { TSection } from "model/restaurantMenu";
import React, { useState } from "react";
import ActiveSectionItem from "./ActiveSectionItem";
import style from "./active-section.module.css";

type TActiveSection = {
  currentActiveSection: TSection | undefined;
};

const ActiveSection = ({ currentActiveSection }: TActiveSection) => {
  const [activeArrow, setActiveArrow] = useState<boolean>(true);

  const handleActiveArrow = () => {
    setActiveArrow((state) => !state);
  };

  return (
    <section className={style.container}>
      <div className={style.headerContainer} onClick={handleActiveArrow}>
        <h2>{currentActiveSection?.name}</h2>
        <i className={`${style.carrot} ${activeArrow ? style.active : ""}`}></i>
      </div>
      <div
        className={`${style.bodyContainer} ${!activeArrow ? style.collapse : ""}`}
      >
        {currentActiveSection?.items.map((currActSecItem) => (
          <ActiveSectionItem
            key={currActSecItem.id}
            currActSecItem={currActSecItem}
          />
        ))}
      </div>
    </section>
  );
};

export default ActiveSection;
