import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

test('Sets the right value', () => {
  let { getByDisplayValue } = render(<Input size={10} />);
  let linkElement = getByDisplayValue(/10/);
  expect(linkElement).toBeInTheDocument();
});

test('Sets the right value', () => {
  let { getByDisplayValue } = render(<Input size={15} />);
  let linkElement = getByDisplayValue(/15/);
  expect(linkElement).toBeInTheDocument();
});
