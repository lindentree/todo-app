import {render, fireEvent, wait, getByPlaceholderText, getByText} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './ToDoList';

it("should be able to add todos", () => {
  const { getByPlaceholderText, getByText } = render(<ToDoList />);
  const input = getByPlaceholderText(/add a todo/i);
  const sampletodo = "Finish assessment";

  getByText("You currently have no todos.");

  fireEvent.change(input, { target: { value: sampletodo } });
  fireEvent.keyDown(input, { key: "Enter" });

  getByText(sampletodo);
  expect(input.value).toBe("");
});