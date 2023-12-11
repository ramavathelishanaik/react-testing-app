import React from 'react';
import { CounterTwoTypes } from './CounterTwo.types';

const CounterTwo = (props: CounterTwoTypes) => {
  return (
    <div>
      <h1>this is counter two</h1>
      <h1>{props.count}</h1>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};

export default CounterTwo;
