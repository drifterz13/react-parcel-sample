import React from 'preact';
import { render } from "react-testing-library";
import PlusButton from "../PlusButton";

test("it should open modal", () => {
  const fakeOpenModal = jest.fn();
  const { getByTestId } = render(<PlusButton openModal={fakeOpenModal} />);
  getByTestId("plus-btn").click();
  expect(fakeOpenModal).toHaveBeenCalledTimes(1);
});
