import React from "react";
import renderComponent from "utils/testingTools";
import BottomCart from ".";

describe("BottomCart", () => {
  it("should render the component", () => {
    const fn = jest.fn;
    const { container } = renderComponent(
      <BottomCart buttonText="test" onClick={fn} />
    );
  });
});
