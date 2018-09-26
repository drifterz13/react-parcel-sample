import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import mockAxios from "axios";
import App from "../App";
import { init } from "../api";

beforeEach(() => {
  mockAxios.__mock.reset();
  init();
});

afterEach(cleanup);

const mockData = {
  title: "React testing library",
  content: "Awesome test tool for react developer."
};

test("fetch all notes", () => {
  render(<App />);
  const { get } = mockAxios.__mock.instance;
  get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [{ id: 1, title: "React", content: "Awesome" }]
    })
  );

  expect(mockAxios.__mock.instance.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.__mock.instance.get).toHaveBeenCalledWith("/notes");
});

test("post new note", () => {
  const { getByTestId, getByLabelText, getByText } = render(<App />);
  getByTestId("plus-btn").click();
  const titleNode = getByLabelText("Title");
  const contentNode = getByLabelText("Content");
  fireEvent.change(titleNode, {
    target: { name: titleNode.getAttribute("name"), value: mockData.title }
  });

  fireEvent.change(contentNode, {
    target: { name: contentNode.getAttribute("name"), value: mockData.content }
  });

  const { post } = mockAxios.__mock.instance;
  post.mockImplementationOnce(() => {
    Promise.resolve({});
  });
  getByText(/Submit/).click();
  expect(mockAxios.__mock.instance.post).toHaveBeenCalledTimes(1);
  expect(mockAxios.__mock.instance.post).toHaveBeenCalledWith(
    "/note",
    mockData
  );
});
