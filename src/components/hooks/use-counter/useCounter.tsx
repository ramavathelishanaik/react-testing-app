import React, { useState } from 'react';
import { userCounterProps } from './userCounter.types';

const useCounter = ({ initialState = 0 }: userCounterProps = {}) => {
  const [state, setState] = useState(initialState);
  const increment = () => setState((state) => state + 1);
  const decrement = () => setState((state) => state - 1);
  return { state, increment, decrement };
};

export default useCounter;
