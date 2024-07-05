import React from "react";
import renderComponent from "utils/testingTools";
import { screen, fireEvent, render } from "@testing-library/react";

import MenuSectionItem from ".";
import { TSection } from "model/restaurantMenu";

describe("MenuSectionItem", () => {
  const menuSections: TSection[] = [
    {
      id: 1,
      name: "test",
      description: null,
      position: 1,
      visible: 1,
      images: [
        {
          id: 1,
          image: "test",
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
              image: "test",
            },
          ],
          available: true,
        },
      ],
    },
  ];

  it("should render MenuSectionItem properly", () => {
    const { container } = renderComponent(
      <MenuSectionItem menuSections={menuSections} />
    );

    expect(container).toBeInTheDocument();
  });
});
