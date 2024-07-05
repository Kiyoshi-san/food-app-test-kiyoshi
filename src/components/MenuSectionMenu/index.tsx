import React from "react";
import MenuSectionItem from "./MenuSectionItem";
import { TSection } from "model/restaurantMenu";

type TMenuSection = {
  menuSections: TSection[] | null;
};

const MenuSectionMenu = ({ menuSections }: TMenuSection) => {
  return (
    <div>
      <MenuSectionItem menuSections={menuSections} />
    </div>
  );
};

export default MenuSectionMenu;
