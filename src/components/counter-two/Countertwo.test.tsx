import { render, screen } from '@testing-library/react';
import CounterTwo from './CounterTwo';
import userEvent from '@testing-library/user-event';

describe('checking counter Two component', () => {
  test('checking whether component is render', () => {
    render(<CounterTwo count={0} />);
    const headEle = screen.getByRole('heading', {
      name: 'this is counter two',
    });
    expect(headEle).toBeInTheDocument();
  });

  test('handlers are called on btn click', async () => {
    userEvent.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const inBtn = screen.getByRole('button', {
      name: 'Increment',
    });

    const deBtn = screen.getByRole('button', {
      name: 'Decrement',
    });

    for (let i = 0; i < 5; i++) {
      await userEvent.click(inBtn);
    }

    await userEvent.click(deBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(5);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
