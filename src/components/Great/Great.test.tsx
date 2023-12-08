// test driven development

// in this we will first write the test cases and then write
//  the software code that satisfys these createAsExpression...

// case 1: component should have Hello text
// case 2: component should have Hello followed by name

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('checking hello test', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('cheking for name Elisha', () => {
  render(<Greet name='Elisha' />);
  const textElementName = screen.getByText(/hello, elisha/i);
  expect(textElementName).toBeInTheDocument();
});
