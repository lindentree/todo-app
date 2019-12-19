import {render, fireEvent, within, getByPlaceholderText, getByText} from '@testing-library/react';
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
  expect(input).toHaveValue("");
});

test("removes a to-do", () => {
  const todos = [{ task: "look up Groovy", completed: false }, { task: "Buy groceries", completed: true }, { task: "Walk the dog", completed: false }]
  const { getByTestId, queryByText } = render(<ToDoList todos={todos} />)

  const removeButton = within(getByTestId("todo-1")).getByText(/remove/i)
  fireEvent.click(removeButton)

  expect(queryByText(todos[1].name)).not.toBeInTheDocument()
})

test("marks a to-do as done", () => {
    const todos = [{task: "look up Groovy", completed: false }, { task: "Buy groceries", completed: true }]
    const { getByTestId } = render(<ToDoList todos={todos} />)
    const firstTodoCheckbox = within(getByTestId("todo-0")).getByTestId("checkbox")
    expect(firstTodoCheckbox.checked).toBe(false)

    fireEvent.click(firstTodoCheckbox)

    expect(firstTodoCheckbox.checked).toBe(true)
  })