import { combineReducers } from "redux";

import menuSectionReducer from "./menuSection/slice";
import navMenuReducer from "./navMenu/slice";
import changeModalActiveReducer from "./activeModal/slice";

const rootReducer = combineReducers({
  menuSectionReducer,
  navMenuReducer,
  changeModalActiveReducer,
});

export default rootReducer;
