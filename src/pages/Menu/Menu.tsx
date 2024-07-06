import React, { memo, useState } from "react";
import "./menu.module.css";
import Menu from "components/Menu";
import MenuSectionMenu from "components/MenuSectionMenu";
import { useGetRestaurantMenu } from "hooks/restaurant/useGetRestaurantMenu";
import { useGetRestaurant } from "hooks/restaurant/useGetRestaurant";
import { useTranslation } from "react-i18next";
import Input from "components/ui/Input";
import HeroBanner from "components/HeroBanner";
import ActiveSection from "components/ActiveSection";
import AlergyInformation from "components/AlergyInformation";
import { useGetActiveMenuSection } from "hooks/useGetActiveMenuSection";
import Search from "components/Search";
import style from "./menu.module.css";

function MenuPage() {
  const { t } = useTranslation();

  const { data: menuData, loading: menuLoading } = useGetRestaurantMenu();
  const { data: restaurantData, loading: restaurantLoading } =
    useGetRestaurant();

  const { currentActiveSection } = useGetActiveMenuSection(
    menuData ? menuData.sections : null
  );

  if (menuLoading || restaurantLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={style.container}>
      <Menu />
      <HeroBanner image={restaurantData?.webSettings.bannerImage || ""} />
      {/*  TODO: */}
      <div className={style.belowSection}>
        <Search />
        <MenuSectionMenu menuSections={menuData ? menuData.sections : null} />
        <ActiveSection currentActiveSection={currentActiveSection} />
        <AlergyInformation />
      </div>
    </section>
  );
}

export default memo(MenuPage);
