import React, { useState } from 'react';
import Button from '../Button/Button';
import './cubeColor.scss';

const CubeColor = () => {
  const [count, setCount] = useState('#'.concat(Math.floor(Math.random() * 16777215).toString(16)));

  return (
    <div className="box__cube">
      <Button
        clickHandler={() => {
          setCount('#'.concat(Math.floor(Math.random() * 16777215).toString(16)));
        }}
        text="Mainīt kuba krāsu"
      />
      <div
        className="cube"
        style={{
          backgroundColor: (count),
        }}
      />
    </div>
  );
};

export default CubeColor;
