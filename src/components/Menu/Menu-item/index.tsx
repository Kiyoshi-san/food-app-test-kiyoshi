import React, { useEffect } from "react";
import style from "./menu-item.module.css";
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

  const page = useGetPage();
  const { navMenuActive } = useSelector(
    (state: RootActiveNavMenu) => state.navMenuReducer
  );

  const handleMenuClick = () => {
    dispatch(activeNavMenu(!navMenuActive));
  };

  return (
    <div data-testid="menu-item" className={style.menuItemContainer}>
      <div className={style.hamburgerContainer} onClick={handleMenuClick}>
        <div
          className={`${style.hamburger} ${navMenuActive ? style.active : ""}`}
        ></div>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.key}>
              <Link
                to={`/${item.key}`}
                className={page === item.key ? style.active : ""}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuItem;
