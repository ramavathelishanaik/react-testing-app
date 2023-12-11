import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('testing useCounterHook', () => {
  test('initial value is 0 in counter state', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.state).toBe(0);
  });

  test('passing initial state as props', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialState: 10,
      },
    });
    expect(result.current.state).toBe(10);
  });

  test('calling increment function', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.state).toBe(1);
  });

  test('calling decrement function', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.state).toBe(-1);
  });
});
