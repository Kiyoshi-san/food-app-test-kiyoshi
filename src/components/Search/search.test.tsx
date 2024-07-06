import React from "react";
import renderComponent from "utils/testingTools";
import Search from "./";

describe("Search", () => {
  it("should render Search component", () => {
    const { container } = renderComponent(<Search />);

    expect(container).toBeInTheDocument();
  });
});
