import React from "react";
import renderComponent from "utils/testingTools";
import { screen } from "@testing-library/react";

import HeroBanner from ".";

describe("HeroBanner", () => {
  it("Should render the component properly", () => {
    const { container } = renderComponent(<HeroBanner image="" />);

    expect(container).toBeInTheDocument();
  });
});
