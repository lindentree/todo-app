import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text in todo list component', () => {
  const { getByText } = render(<App />);
  const list = getByText(/my todo list/i);
  expect(list).toBeInTheDocument();
});