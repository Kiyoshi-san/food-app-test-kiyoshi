// utils/testingTools.ts
import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter } from "react-router-dom";
import "../i18n";

const renderComponent = (children: ReactNode) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default renderComponent;
