import React from "react";
import renderComponent from "utils/testingTools";
import { screen, fireEvent, render } from "@testing-library/react";

import MenuSectionItem from ".";
import { TSection } from "model/restaurantMenu";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("MenuSectionItem", () => {
  it("should render MenuSectionItem properly", () => {
    const { container } = renderComponent(
      <MenuSectionItem menuSections={menuSectionsTest} />
    );

    expect(container).toBeInTheDocument();
  });
});
