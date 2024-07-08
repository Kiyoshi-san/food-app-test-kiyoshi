import React from "react";
import renderComponent from "utils/testingTools";
import { screen, fireEvent, render } from "@testing-library/react";
import MenuItemMobile from ".";

describe("MenuItem", () => {
  const menuItems = [{ text: "menu", key: "menu" }];

  it("should render MenuItem", () => {
    renderComponent(<MenuItemMobile menuItems={menuItems} />);

    screen.queryByTestId("menu-item");
  });

  it("should active item when selected", () => {
    renderComponent(<MenuItemMobile menuItems={menuItems} />);

    const itemMenu = screen.queryByTestId("menu-item") as HTMLElement;

    fireEvent.click(itemMenu);

    expect(itemMenu).toHaveClass("active");
  });
});
