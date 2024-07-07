import React from "react";
import renderComponent from "utils/testingTools";
import ModalActiveItem from "./";

describe("ModalActiveItem", () => {
  const items = {
    id: 1,
    name: "test",
    description: "test",
    alcoholic: 1,
    price: 1,
    position: 1,
    visible: 1,
    availabilityType: "test",
    sku: "test",
    images: [
      {
        id: 1,
        image: "teste",
      },
    ],
    available: true,
  };
  it("should render ModalActiveItem", () => {
    const { container } = renderComponent(
      <ModalActiveItem currActSecItem={items} />
    );
  });
});
