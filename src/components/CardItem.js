import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../redux/slices/cardSlice';
import { spendPoints } from '../redux/slices/pointsSlice';

function CardItem({ card, nextCard }) {
  console.log(card);

  return (
    <>
      <button onClick={(e) => nextCard(e)}>false</button>
      {card.text}
      <button onClick={(e) => nextCard(e)}>true</button>
    </>
  );
}

export default CardItem;
