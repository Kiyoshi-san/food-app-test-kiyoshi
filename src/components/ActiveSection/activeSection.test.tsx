import React from "react";
import renderComponent from "utils/testingTools";

import ActiveSection from "./";

describe("ActiveSection", () => {
  const currentActiveSection = {
    id: 1,
    name: "test",
    description: null,
    position: 1,
    visible: 1,
    images: [
      {
        id: 1,
        image: "teste",
      },
    ],
    items: [
      {
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
      },
    ],
  };

  it("Should render the component properly", () => {
    const { container } = renderComponent(
      <ActiveSection currentActiveSection={currentActiveSection} />
    );

    expect(container).toBeInTheDocument();
  });
});
