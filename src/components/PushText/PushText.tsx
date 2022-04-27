import React, { useState } from 'react';
import './pushText.scss';

const PushText = () => {
  const [count, setCount] = useState(false);
  const toggle = () => {
    setCount(!count);
  };

  return (
    <div className="box__push">
      <button className="button__pushText" onClick={toggle}>
        {count ? 'Mainīt tekstu uz "Nav nospiests"' : 'Mainīt tekstu uz "Nospiests"'}
      </button>
      <div className="box_pushText">
        <p>{count ? 'Nospiests' : 'Nav nospiests'}</p>
      </div>
    </div>
  );
};

export default PushText;
