import React, { useEffect } from "react";
import style from "./menu-item.module.css";
// import { useDispatch, useSelector } from "react-redux";
import type { RootState, TMenuItem } from "model/menu";
import { Link } from "react-router-dom";
import { useGetPage } from "hooks/useGetPage";

type TMenuItems = {
  menuItems: TMenuItem[];
};

const MenuItem = ({ menuItems }: TMenuItems) => {
  const page = useGetPage();

  return (
    <div data-testid="menu-item" className={style.menuItemContainer}>
      <div className={style.hamburger}></div>
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
