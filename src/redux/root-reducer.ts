import { combineReducers } from "redux";

import menuReducer from "./menu/slice";

const rootReducer = combineReducers({ menuReducer });

export default rootReducer;
