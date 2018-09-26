import React from "preact";
import { render, cleanup } from "preact-testing-library";
import Home from "../Home";

test("<Home />", () => {
  const mockData = [{ id: 1, title: "Preact", content: "Awesome!" }];
  const { container, getByTestId, rerender } = render(
    <Home notes={mockData} />
  );
  expect(getByTestId("home")).toBeTruthy();

  rerender(<Home note={undefined} />);
  expect(container.textContent).toMatch(/loading.../);
  cleanup();
});
