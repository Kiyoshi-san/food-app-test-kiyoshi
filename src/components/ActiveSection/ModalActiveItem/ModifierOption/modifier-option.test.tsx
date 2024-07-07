import React from "react";
import renderComponent from "utils/testingTools";
import ModifierOption from "./";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("ModifierOption", () => {
  it("should render component", () => {
    const modifierOptions = menuSectionsTest[0].items[0].modifiers[0].items;

    const { container } = renderComponent(
      <ModifierOption options={modifierOptions} />
    );

    expect(container).toBeInTheDocument();
  });
});
