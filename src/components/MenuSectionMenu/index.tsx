import React from "react";
import MenuSectionItem from "./MenuSectionItem";
import { TSection } from "model/restaurantMenu";
import style from "./menu-section-menu.module.css";

type TMenuSection = {
  menuSections: TSection[] | null;
};

const MenuSectionMenu = ({ menuSections }: TMenuSection) => {
  return (
    <section className={style.container}>
      <MenuSectionItem menuSections={menuSections} />
    </section>
  );
};

export default MenuSectionMenu;
