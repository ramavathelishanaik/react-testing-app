import React from 'react';

type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <p style={{ color: 'white', backgroundColor: 'red' }}>
        Hello, {props.name}
      </p>
    </div>
  );
};

export default Greet;
