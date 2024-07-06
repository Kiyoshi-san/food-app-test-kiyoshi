import React from "react";
import renderComponent from "utils/testingTools";
import MenuSectionItem from ".";

describe("MenuSectionItem", () => {
  const menuSections = [
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
      price: 1,
    },
  ];
  it("should render the component", () => {
    renderComponent(<MenuSectionItem menuSections={menuSections} />);
  });
});
