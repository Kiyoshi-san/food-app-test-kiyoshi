import React from "react";
import renderComponent from "utils/testingTools";
import Modal from ".";

describe("Modal", () => {
  it("should render Modal", () => {
    const fn = jest.fn;
    const { container } = renderComponent(
      <Modal activeModal={true} handleCloseModal={fn}>
        test
      </Modal>
    );

    expect(container).toBeInTheDocument();
  });
});
