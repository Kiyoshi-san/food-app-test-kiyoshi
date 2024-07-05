type TFoodState = {
  activeFood: string;
};

export type RootState = {
  foodReducer: TFoodState;
};

export type TFoodItem = {
  text: string;
  key: string;
};
