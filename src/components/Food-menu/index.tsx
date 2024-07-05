import React from "react";
import FoodItem from "./Food-item";

const FoodMenu = () => {
  const foodItems = [
    { text: "menu", key: "menu" },
    { text: "signin", key: "signin" },
    { text: "contact", key: "contact" },
  ];

  return (
    <div>
      <FoodItem foodItems={foodItems} />
    </div>
  );
};

export default FoodMenu;
