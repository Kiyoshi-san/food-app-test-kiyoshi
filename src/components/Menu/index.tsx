import React, { memo } from "react";
import MenuItem from "./MenuItem";
import style from "./menu.module.css";

import { useTranslation } from "react-i18next";
import Input from "components/ui/Input";
import Select from "components/ui/Select";

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

export default memo(Menu);
