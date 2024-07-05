import React from "react";
import renderComponent from "utils/testingTools";
import { screen } from "@testing-library/react";

import ActiveSection from ".";

describe("ActiveSection", () => {
  it("Should render the component properly", () => {
    const { container } = renderComponent(<ActiveSection />);

    expect(container).toBeInTheDocument();
  });
});
