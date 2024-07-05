import React from "react";
import renderComponent from "utils/testingTools";
import { screen } from "@testing-library/react";

import Input from ".";

describe("Input", () => {
  it("Should render the component properly", () => {
    const { container } = renderComponent(<Input />);

    expect(container).toBeInTheDocument();
  });
});
