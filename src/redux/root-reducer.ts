import { combineReducers } from "redux";

import menuSectionReducer from "./menuSection/slice";

const rootReducer = combineReducers({ menuSectionReducer });

export default rootReducer;
