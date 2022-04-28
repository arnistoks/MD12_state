import React, { useState } from 'react';
import './numbers.scss';

const Numbers = () => {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [numberArray, setNumberArray] = useState(numberButtons);

  const removeItem = (index: number) => {
    const newNumberArray = [...numberArray];
    newNumberArray.splice(index, 1);
    return setNumberArray(newNumberArray);
  };

  return (
    <div>
      <div className="box__numbers">
        <button className="button" onClick={() => removeItem(-1)}>
          Remove from end
        </button>
        <button className="button" onClick={() => removeItem(0)}>
          Remove from start
        </button>
        <button className="button" onClick={() => setNumberArray(numberButtons)}>
          Reset
        </button>
      </div>
      <div className="box__numbers">
        <button className="button" onClick={() => setNumberArray(numberArray.slice(numberArray.length))}>
          Remove all
        </button>
        <button className="button" onClick={() => setNumberArray(numberArray.slice(5, numberArray.length))}>
          Show up 5
        </button>
        <button className="button" onClick={() => setNumberArray(numberArray.map((number) => number * 2))}>
          All numbers x 2
        </button>
        <button className="button" onClick={() => setNumberArray(numberArray.map((number) => number / 10))}>
          All numbers / 10
        </button>
      </div>
      <div className="box__numbers box__numbers--last">
        {numberArray.map((numberButton, index) => (
          <button
            className="button__numbers"
            type="button"
            key={numberButton}
            onClick={() => removeItem(index)}
          >
            {numberButton}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
