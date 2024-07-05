import React, { memo } from "react";
import "./menu.module.css";
import Menu from "components/Menu";
import MenuSectionMenu from "components/MenuSectionMenu";
import { useGetRestaurantMenu } from "hooks/restaurant/useGetRestaurantMenu";
import { useGetRestaurant } from "hooks/restaurant/useGetRestaurant";
import { useTranslation } from "react-i18next";
import Input from "components/Input";
import HeroBanner from "components/HeroBanner";
import ActiveSection from "components/ActiveSection";
import AlergyInformation from "components/AlergyInformation";

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
      <HeroBanner />
      {/*  TODO: */}
      <Input />
      <MenuSectionMenu menuSections={menuSections} />
      <ActiveSection />
      <AlergyInformation />
    </div>
  );
}

export default memo(MenuPage);
