import './cards.scss';
import React, { useState } from 'react';
import X from './button.png';

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: 'First card',

    },
    {
      id: 2,
      title: 'Second card',

    },
    {
      id: 3,
      title: 'Third card',

    },
    {
      id: 4,
      title: 'Fourth card',

    },
    {
      id: 5,
      title: 'Fifth card',

    },
    {
      id: 6,
      title: 'Sixth card',

    },
  ];

  const [cardArray, setCardArray] = useState(cards);

  const removeItem = (index: number) => {
    const newArray = [...cardArray];
    newArray.splice(index, 1);
    return setCardArray(newArray);
  };

  return (
    <div>
      <div className="box__numbers">
        <button className="button" onClick={() => setCardArray(cards)}>
          Reset
        </button>
        <button
          className="button"
          onClick={() => setCardArray(cardArray.slice(cardArray.length))}
        >
          Remove all
        </button>
        <button
          className="button"
          onClick={() => setCardArray(cardArray.map((card) => ({ ...card, title: card.title.toUpperCase() })))}
        >
          Make all tiltes UPPERCASE
        </button>
      </div>
      <div className="box__cards">
        {cardArray.map((card, index) => (
          <div
            className="card"
            key={card.id}
          >
            <h2 className="card__id">
              ID:
              {' '}
              {card.id}
            </h2>
            <h1 className="card__title">
              Title:
              {' '}
              {card.title}
            </h1>
            <div className="card__button" onClick={() => removeItem(index)}>
              <img src={X} alt="X" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
