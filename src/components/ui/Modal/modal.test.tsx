import React from "react";
import renderComponent from "utils/testingTools";
import Modal from ".";

describe("Modal", () => {
  it("should render Modal", () => {
    const { container } = renderComponent(<Modal>test</Modal>);

    expect(container).toBeInTheDocument();
  });
});
