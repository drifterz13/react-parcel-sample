import React from "react";
import { render, fireEvent } from "react-testing-library";
import NoteForm from "../NoteForm";

const mockData = {
  title: "How to sleep ?",
  content: "Just close your eyes."
};

test("submit form with correct value", () => {
  const fakeHandleChange = jest.fn();
  const fakeHandleSubmit = jest.fn();
  const { getByLabelText, getByText } = render(
    <NoteForm handleChange={fakeHandleChange} handleSubmit={fakeHandleSubmit} />
  );
  let name;
  const titleInput = getByLabelText("Title");
  name = titleInput.getAttribute("name");
  fireEvent.change(titleInput, { target: { name, value: mockData.title } });
  expect(fakeHandleChange).toHaveBeenCalledTimes(1);

  const contentInput = getByLabelText("Content");
  name = contentInput.getAttribute("name");
  fireEvent.change(contentInput, { target: { name, value: mockData.content } });

  getByText("Submit").click();
  expect(fakeHandleChange).toHaveBeenCalledTimes(2);
  expect(fakeHandleSubmit).toHaveBeenCalledTimes(1);
});
