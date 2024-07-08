import React from "react";
import renderComponent from "utils/testingTools";
import Select from "./";

describe("Select", () => {
  it("should render Select", () => {
    const fn = jest.fn;
    const { container } = renderComponent(<Select />);

    expect(container).toBeInTheDocument();
  });
});
