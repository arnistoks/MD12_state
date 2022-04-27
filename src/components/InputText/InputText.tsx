import React, { useState } from 'react';
import './inputText.scss';

const InputText = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(false);
  const toggle = () => {
    setCount(!count);
  };

  return (
    <div className="box__inputText">
      <div className="box__inputWrap">
        <button className="button__pushText" onClick={toggle}>
          {count ? 'Nerādīt tekstu' : 'Parādīt tekstu'}
        </button>
        <input
          className="input"
          type="text"
          placeholder="Raksti šeit"
          maxLength={15}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="box__inputWrap">
        <p className={count ? 'text__inputText' : 'hidden'}>{inputValue}</p>
      </div>
    </div>
  );
};

export default InputText;
