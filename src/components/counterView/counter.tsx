import React from 'react';
import useCounter from '../hooks/use-counter/useCounter';

const CounterHook = () => {
  const { state, increment, decrement } = useCounter();
  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
      </div>
    </div>
  );
};

export default CounterHook;
