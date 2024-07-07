import { combineReducers } from "redux";

import menuSectionReducer from "./menuSection/slice";
import navMenuReducer from "./navMenu/slice";
import changeModalActiveReducer from "./activeModal/slice";
import cartReducer from "./cart/slice";

const rootReducer = combineReducers({
  menuSectionReducer,
  navMenuReducer,
  changeModalActiveReducer,
  cartReducer,
});

export default rootReducer;
