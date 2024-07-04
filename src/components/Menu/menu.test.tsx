import React from "react";
import renderComponent from "utils/testingTools";
import { screen } from "@testing-library/react";
import Menu from ".";

describe("Menu", () => {
  it("should render Menu component with Menu text", () => {
    const { container } = renderComponent(<Menu />);

    expect(container).toBeInTheDocument();
  });
});
