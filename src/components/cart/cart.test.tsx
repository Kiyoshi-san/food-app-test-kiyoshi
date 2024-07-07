import React from "react";
import renderComponent from "utils/testingTools";
import Cart from "./";

describe("Cart", () => {
  it("should render the Cart", () => {
    const { container } = renderComponent(<Cart />);
  });
});
