import React from "react";
import style from "./MenuSectionItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuSection } from "../../../redux/menuSection/slice";
import type { RootState } from "model/menuSection";
import { TSection } from "model/restaurantMenu";

type TSections = {
  menuSections: TSection[] | null;
};

const MenuSectionItem = ({ menuSections }: TSections) => {
  const dispatch = useDispatch();

  const { activeMenuSection } = useSelector(
    (state: RootState) => state.menuSectionReducer
  );

  const handleMenuSectionClick = (menuSection: number) => {
    dispatch(selectMenuSection(menuSection));
  };

  return (
    <section
      data-testid="menuSection-item"
      className={style.menuSectionItemContainer}
    >
      <div className={style.hamburger}></div>
      <nav>
        <ul>
          {!!menuSections &&
            menuSections.map((section) => (
              <li
                key={section.id}
                className={activeMenuSection === section.id ? style.active : ""}
                onClick={() => handleMenuSectionClick(section.id)}
              >
                <img
                  src={section.images[0].image}
                  alt={section?.description || ""}
                />
                <p>{section.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </section>
  );
};

export default MenuSectionItem;
