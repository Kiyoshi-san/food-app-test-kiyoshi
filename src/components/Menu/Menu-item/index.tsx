import React from "react";
import style from "./menu-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "../../../redux/menu/slice";
import type { RootState, TMenuItem } from "model/menu";

type TMenuItems = {
  menuItems: TMenuItem[];
};

const MenuItem = ({ menuItems }: TMenuItems) => {
  const dispatch = useDispatch();

  const { activeMenu } = useSelector((state: RootState) => state.menuReducer);

  const handleMenuClick = (menu: string) => {
    dispatch(selectMenu(menu));
  };

  return (
    <div data-testid="menu-item" className={style.menuItemContainer}>
      <div className={style.hamburger}></div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className={activeMenu === item.key ? style.active : ""}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuItem;
