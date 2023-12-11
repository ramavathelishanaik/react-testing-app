import { render, screen } from '@testing-library/react';
import CounterHook from './counter';
import user from '@testing-library/user-event';

describe('testing Counter component', () => {
  test('counter heading and buttons are present', () => {
    render(<CounterHook />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toBeInTheDocument();

    const increBtn = screen.getByRole('button', {
      name: 'increment',
    });
    expect(increBtn).toBeInTheDocument();

    const decBtn = screen.getByRole('button', {
      name: 'decrement',
    });
    expect(decBtn).toBeInTheDocument();
  });

  test('counter initial values is 0', () => {
    render(<CounterHook />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('0');
  });

  test('onclick on increment btn state value is 1', async () => {
    user.setup();
    render(<CounterHook />);

    const increBtn = screen.getByRole('button', {
      name: 'increment',
    });
    await user.click(increBtn);

    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('1');
  });
});
