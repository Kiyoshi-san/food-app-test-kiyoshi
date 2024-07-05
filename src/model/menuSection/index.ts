type TMenuSectionState = {
  activeMenuSection: number;
};

export type RootState = {
  menuSectionReducer: TMenuSectionState;
};

export type TMenuSectionItem = {
  text: string;
  key: string;
};
