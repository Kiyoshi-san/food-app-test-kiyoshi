// utils/testingTools.ts
import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "redux/store";

const renderComponent = (children: ReactNode) => {
  return render(<Provider store={store}>{children}</Provider>);
};

export default renderComponent;
