import React from "react";
import "./menu.module.css";
import Menu from "components/Menu";
import MenuSectionMenu from "components/MenuSectionMenu";
import { useGetRestaurantMenu } from "hooks/restaurant/useGetRestaurantMenu";
import { useGetRestaurant } from "hooks/restaurant/useGetRestaurant";
import { useTranslation } from "react-i18next";

function MenuPage() {
  const { t } = useTranslation();

  const { data: menuData, loading: menuLoading } = useGetRestaurantMenu();
  const { data: restaurantData, loading: restaurantLoading } =
    useGetRestaurant();

  if (menuLoading || restaurantLoading) {
    return <div>Loading...</div>;
  }

  const menuSections = menuData && menuData.sections;

  return (
    <div>
      <Menu />
      {/*  TODO: */}
      <input type="text" placeholder={t("searchMenuItems")} />
      <MenuSectionMenu menuSections={menuSections} />
    </div>
  );
}

export default MenuPage;
