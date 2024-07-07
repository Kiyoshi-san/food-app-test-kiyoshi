import React from "react";
import renderComponent from "utils/testingTools";
import ModalActiveItem from "./";
import { menuSectionsTest } from "utils/testingTools/testingData";

describe("ModalActiveItem", () => {
  const items = menuSectionsTest[0].items;

  it("should render ModalActiveItem", () => {
    const { container } = renderComponent(
      <ModalActiveItem currActSecItem={items[0]} />
    );
  });
});
