import { TSection } from "model/restaurantMenu";

export const menuSectionsTest: TSection[] = [
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
        modifiers: [
          {
            id: 1,
            name: "test",
            minChoices: 1,
            maxChoices: 1,
            items: [
              {
                id: 1,
                name: "test",
                price: 33.0,
                maxChoices: 1,
                position: 0,
                visible: 1,
                availabilityType: "test",
                available: true,
              },
            ],
          },
        ],
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
