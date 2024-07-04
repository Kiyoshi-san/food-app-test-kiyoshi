type TMenuState = {
  activeMenu: string;
};

export type RootState = {
  menuReducer: TMenuState;
};

export type TMenuItem = {
  text: string;
  key: string;
};
