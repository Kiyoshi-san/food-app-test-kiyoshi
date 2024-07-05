import { combineReducers } from "redux";

import foodReducer from "./food/slice";

const rootReducer = combineReducers({ foodReducer });

export default rootReducer;
