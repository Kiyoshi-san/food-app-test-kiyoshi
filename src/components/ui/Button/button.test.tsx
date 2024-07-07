import React from "react";
import renderComponent from "utils/testingTools";
import Button from "./";

describe("Button", () => {
  it("Should render Button", () => {
    const fn = jest.fn;
    const { container } = renderComponent(<Button text="test" onClick={fn} />);
  });
});
