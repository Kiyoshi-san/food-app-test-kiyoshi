import React from "react";
import renderComponent from "utils/testingTools";
import { screen, fireEvent, render } from "@testing-library/react";
import MenuItem from ".";

describe("MenuItem", () => {
  const menuItems = [{ text: "menu", key: "menu" }];

  it("should render MenuItem", () => {
    renderComponent(<MenuItem menuItems={menuItems} />);

    screen.queryByTestId("menu-item");
  });

  it("should active item when selected", () => {
    renderComponent(<MenuItem menuItems={menuItems} />);

    const itemMenu = screen.getByText(/menu/i);

    fireEvent.click(itemMenu);

    expect(itemMenu).toHaveClass("active");
  });
});
