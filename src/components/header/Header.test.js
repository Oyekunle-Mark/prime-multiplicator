import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('Renders the right header text.', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Prime Multiplicator/i);
  expect(linkElement).toBeInTheDocument();
});
