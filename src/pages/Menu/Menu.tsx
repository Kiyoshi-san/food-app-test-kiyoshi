import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Modal from "components/ui/Modal";
import ProductInfo from "components/ProductInfo";
import {
  changeActiveModal,
  changeModalContent,
  RootActiveModal,
} from "../../redux/activeModal/slice";
import { RootCart } from "../../redux/cart/slice";
import BottomCart from "components/BottomCart";
import Cart from "components/cart";
import Wrapper from "components/Wrapper";

function MenuPage() {
  const [totalItems, setTotalItems] = useState<number>();

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalItems(
      cart.products.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0)
    );
  });

  const { modalContent } = useSelector(
    (state: RootActiveModal) => state.changeModalActiveReducer
  );

  const { cart } = useSelector((state: RootCart) => state.cartReducer);

  const { t } = useTranslation();

  const { data: menuData, loading: menuLoading } = useGetRestaurantMenu();
  const { data: restaurantData, loading: restaurantLoading } =
    useGetRestaurant();

  const { currentActiveSection } = useGetActiveMenuSection(
    menuData ? menuData.sections : null
  );

  const handleModalCarrinho = () => {
    const component = <Cart />;
    dispatch(changeModalContent(component));
    dispatch(changeActiveModal(true));
  };

  if (menuLoading || restaurantLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={style.container}>
      <Modal>{modalContent}</Modal>
      <Menu />
      <HeroBanner image={restaurantData?.webSettings.bannerImage || ""} />
      <div className={style.belowSection}>
        <Search />
        <div className={style.mainContainer}>
          <div className={style.productContainer}>
            <Wrapper>
              <MenuSectionMenu
                menuSections={menuData ? menuData.sections : null}
              />
              <ActiveSection currentActiveSection={currentActiveSection} />
            </Wrapper>
            <AlergyInformation />
            <div className={style.bottomCartContainer}>
              {!!totalItems && (
                <BottomCart
                  buttonText={t("yourBasket", {
                    count: totalItems,
                  })}
                  onClick={handleModalCarrinho}
                />
              )}
            </div>
          </div>
          <div className={style.cartContainer}>
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(MenuPage);
