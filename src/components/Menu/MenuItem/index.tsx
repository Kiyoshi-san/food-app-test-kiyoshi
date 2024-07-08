import React, { useEffect, useState } from "react";
import style from "./menu-item.module.css";
import type { TMenuItem } from "model/menu";
import { Link } from "react-router-dom";
import { useGetPage } from "hooks/useGetPage";
import { useSelector, useDispatch } from "react-redux";
import { activeNavMenu, RootActiveNavMenu } from "../../../redux/navMenu/slice";
import MenuItemMobile from "../MenuItemMobile";
import Select from "components/ui/Select";

type TMenuItems = {
  menuItems: TMenuItem[];
};

const MenuItem = ({ menuItems }: TMenuItems) => {
  const [selectedItem, setSelectedItem] = useState<string>();

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.key === page);
    if (currentItem) {
      setSelectedItem(currentItem.text);
    }
  }, [menuItems]);

  const page = useGetPage();

  return (
    <div className={style.menuItemContainer}>
      <Select />
      <div className={style.menuItemsContainer}>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                className={page === item.key ? style.active : ""}
              >
                <Link to={`/${item.key}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <MenuItemMobile menuItems={menuItems} />
    </div>
  );
};

export default MenuItem;
