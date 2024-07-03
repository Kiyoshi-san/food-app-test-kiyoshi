import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();

    if (process.env.NODE_ENV !== "production") {
      middleware.push(logger);
    }

    return middleware;
  },
});

export default store;
