import React from "react";
import renderComponent from "utils/testingTools";
import MenuSectionItem from ".";
import { TSection } from "model/restaurantMenu";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("MenuSectionItem", () => {
  it("should render the component", () => {
    renderComponent(<MenuSectionItem menuSections={menuSectionsTest} />);
  });
});
