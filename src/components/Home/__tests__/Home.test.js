import React from "react";
import { render } from "react-testing-library";
import Home from "../Home";

test("<Home />", () => {
  const { container } = render(<Home />);
  expect(container.textContent).toMatch(/🏡/);
});
