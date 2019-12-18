import {render, fireEvent, wait, getByPlaceholderText, getByText} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './ToDoList';

it("should be able to add todos", () => {
  const { container } = render(<ToDoList />);
  const input = getByPlaceholderText(/add a todo/i);
  const todo = "Finish assessment";

  getByText("No to-dos!");

  fireEvent.change(input, { target: { value: todo } });
  fireEvent.keyDown(input, { key: "Enter" });

  getByText(todo);
  expect(input.value).toBe("");
});