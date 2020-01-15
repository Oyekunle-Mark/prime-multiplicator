import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Prime Multiplicator/i);
  expect(linkElement).toBeInTheDocument();
});
