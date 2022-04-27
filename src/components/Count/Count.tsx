import React, { useState } from 'react';
import './count.scss';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <button
        className="button__count"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <h2 className="result">{count}</h2>
    </div>
  );
};

export default Count;
