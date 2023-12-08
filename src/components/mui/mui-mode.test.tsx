import { render, screen } from '@testing-library/react';
import { MuiMode } from './mui';

describe('wrapper', () => {
  test('render palate colour', () => {
    render(<MuiMode />);
    const textEle = screen.getByRole('heading');
    expect(textEle).toBeInTheDocument();
  });
});
