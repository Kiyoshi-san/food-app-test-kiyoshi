import React from "react";
import renderComponent from "utils/testingTools";
import AddToCart from "./";

describe("AddToCart", () => {
  it("should render the component", () => {
    const fn = jest.fn;
    const { container } = renderComponent(
      <AddToCart quantity={0} setQuantity={fn} onClick={fn} />
    );
  });
});
