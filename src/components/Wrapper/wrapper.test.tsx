import React from "react";
import renderComponent from "utils/testingTools";
import Wrapper from ".";

describe("Wrapper", () => {
  it("should render component Wrapper", () => {
    const { container } = renderComponent(<Wrapper>test</Wrapper>);
  });
});
