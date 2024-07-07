import React from "react";
import renderComponent from "utils/testingTools";
import ActiveSectionItem from ".";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("ActiveSectionItem", () => {
  const currActSecItem = menuSectionsTest[0].items[0];

  it("should render the component", () => {
    const { container } = renderComponent(
      <ActiveSectionItem currActSecItem={currActSecItem} />
    );

    expect(container).toBeInTheDocument();
  });
});
