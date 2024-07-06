import React from "react";
import MenuItem from "./Menu-item";
import style from "./menu.module.css";

import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    { text: t("menu"), key: "menu" },
    { text: t("signin"), key: "signin" },
    { text: t("contact"), key: "contact" },
  ];

  return (
    <section className={style.menuContainer}>
      <MenuItem menuItems={menuItems} />
    </section>
  );
};

export default Menu;
