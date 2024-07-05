import React from "react";
import "./menu.module.css";
import Menu from "components/Menu";
import FoodMenu from "components/Food-menu";
import { getStoreMenu } from "hooks/getStoreMenu";

function MenuPage() {
  const resp = getStoreMenu();
  console.log("resp");
  console.log(resp);
  console.log("resp");

  return (
    <div>
      <Menu />
      <FoodMenu />
    </div>
  );
}

export default MenuPage;
