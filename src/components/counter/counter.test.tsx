import { render, screen } from '@testing-library/react';
import Counter from './counter';
import user from '@testing-library/user-event';

describe('counter', () => {
  it('counter testing', () => {
    render(<Counter />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toBeInTheDocument();

    const btnEle = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(btnEle).toBeInTheDocument();
  });

  test('initial value check', () => {
    render(<Counter />);
    const initialEle = screen.getByRole('heading');
    expect(initialEle).toHaveTextContent('0');
  });

  test('checking whether count is increasing or not when clicking', async () => {
    user.setup();
    render(<Counter />);
    const btnEle = screen.getByRole('button', {
      name: 'Increment',
    });

    await user.click(btnEle);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('1');
  });

  test('checking whether count 2 for double click', async () => {
    user.setup();
    render(<Counter />);
    const btnEle = screen.getByRole('button', {
      name: 'Increment',
    });

    for (let i = 0; i < 2; i++) {
      //   await act(async () => await user.click(btnEle));
      await user.click(btnEle);
    }

    // await user.dblClick(btnEle);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('2');
  });

  test('expect 10 in the heading after clicking set button', async () => {
    user.setup();
    render(<Counter />);
    const amountEle = screen.getByRole('spinbutton');
    await user.type(amountEle, '10');
    expect(amountEle).toHaveValue(10);

    const setbuttonEle = screen.getByRole('button', {
      name: 'set',
    });
    await user.click(setbuttonEle);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('10');
  });

  test('keyborad tab event', async () => {
    render(<Counter />);
    const amountEle = screen.getByRole('spinbutton');
    const IncrementEle = screen.getByRole('button', {
      name: 'Increment',
    });
    const setEle = screen.getByRole('button', {
      name: 'set',
    });
    await user.tab();
    expect(IncrementEle).toHaveFocus();
    await user.tab();
    expect(amountEle).toHaveFocus();
    await user.tab();
    expect(setEle).toHaveFocus();
  });
});
