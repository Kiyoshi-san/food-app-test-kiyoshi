import React from "react";
import renderComponent from "utils/testingTools";

import AlergyInformation from ".";

describe("AlergyInformation", () => {
  it("Should render the component properly", () => {
    const { container } = renderComponent(<AlergyInformation />);

    expect(container).toBeInTheDocument();
  });
});
