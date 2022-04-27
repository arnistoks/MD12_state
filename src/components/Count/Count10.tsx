import React, { useState } from 'react';
import './count.scss';

const Count10 = () => {
  const [count10, setCount10] = useState(0);

  return (

    <div className="box">
      <button
        className="button__count"
        onClick={() => {
          setCount10(0);
        }}
      >
        Reset
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount10(count10 + 10);
        }}
      >
        +
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount10(count10 - 10);
        }}
      >
        -
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount10(count10 * 10);
        }}
      >
        x
      </button>
      <button
        className="button__count"
        onClick={() => {
          setCount10(count10 / 10);
        }}
      >
        /
      </button>
      <h2 className="result">{count10}</h2>
    </div>
  );
};

export default Count10;
