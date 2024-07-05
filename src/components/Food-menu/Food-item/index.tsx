import React, { useEffect } from "react";
import style from "./food-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFood } from "../../../redux/food/slice";
import type { RootState, TFoodItem } from "model/food";
import { Link } from "react-router-dom";

type TFoodItems = {
  foodItems: TFoodItem[];
};

const FoodItem = ({ foodItems }: TFoodItems) => {
  const dispatch = useDispatch();

  const { activeFood } = useSelector((state: RootState) => state.foodReducer);

  const handleFoodClick = (food: string) => {
    dispatch(selectFood(food));
  };

  return (
    <div data-testid="food-item" className={style.foodItemContainer}>
      <div className={style.hamburger}></div>
      <nav>
        <ul>
          {foodItems.map((item) => (
            <li
              key={item.key}
              className={activeFood === item.key ? style.active : ""}
              onClick={() => handleFoodClick(item.key)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FoodItem;
