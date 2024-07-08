import React, { useEffect, useState } from "react";
import style from "./menu-item-mobile.module.css";
import type { TMenuItem } from "model/menu";
import { Link } from "react-router-dom";
import { useGetPage } from "hooks/useGetPage";
import { useSelector, useDispatch } from "react-redux";
import { activeNavMenu, RootActiveNavMenu } from "../../../redux/navMenu/slice";

type TMenuItems = {
  menuItems: TMenuItem[];
};

const MenuItem = ({ menuItems }: TMenuItems) => {
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState<string>();

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.key === page);
    if (currentItem) {
      setSelectedItem(currentItem.text);
    }
  }, [menuItems]);

  const page = useGetPage();
  const { navMenuActive } = useSelector(
    (state: RootActiveNavMenu) => state.navMenuReducer
  );

  const handleMenuClick = () => {
    dispatch(activeNavMenu(!navMenuActive));
  };

  const handleSelecteMenuItem = () => {
    dispatch(activeNavMenu(!navMenuActive));
  };

  return (
    <div className={style.menuItemContainerMobile}>
      <div className={style.hamburgerContainer} onClick={handleMenuClick}>
        <div
          data-testid="menu-item"
          className={`${style.hamburger} ${navMenuActive ? style.active : ""}`}
        ></div>
      </div>
      <div className={style.titleContainerMobile}>
        <h1>{selectedItem}</h1>
      </div>
      <div
        className={`${style.menuItemsContainerMobile} ${navMenuActive ? style.active : ""}`}
      >
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={page === item.key ? style.active : ""}
                onClick={handleSelecteMenuItem}
              >
                <Link to={`/${item.key}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuItem;
