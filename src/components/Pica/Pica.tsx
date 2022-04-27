import React, { useState } from 'react';
import './pica.scss';
import Button from '../Button/Button';

const PlusPica = () => {
  const [count, setCount] = useState('');

  return (
    <div className="box__pica">
      <Button
        clickHandler={() => {
          setCount(`${count} pica`);
        }}
        text="Pievienot pica"
      />
      <h2 className="text__pica">
        Man garšo:
        {count}
      </h2>
    </div>
  );
};

export default PlusPica;
