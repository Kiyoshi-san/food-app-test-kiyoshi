import { combineReducers } from "redux";

import menuSectionReducer from "./menuSection/slice";
import navMenuReducer from "./navMenu/slice";

const rootReducer = combineReducers({
  menuSectionReducer,
  navMenuReducer,
});

export default rootReducer;
