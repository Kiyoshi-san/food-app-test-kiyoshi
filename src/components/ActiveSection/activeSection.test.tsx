import React from "react";
import renderComponent from "utils/testingTools";

import ActiveSection from "./";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("ActiveSection", () => {
  it("Should render the component properly", () => {
    const { container } = renderComponent(
      <ActiveSection currentActiveSection={menuSectionsTest[0]} />
    );

    expect(container).toBeInTheDocument();
  });
});
