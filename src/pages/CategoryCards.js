import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import {
  addPoints,
  spendPoints,
} from '../redux/slices/pointsSlice';
import CardItem from '../components/CardItem';
import { changeStatus, setCards } from '../redux/slices/cardSlice';


function CategoryCards(props) {
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setInCorrect] = React.useState(0);

  const dispatch = useDispatch();
  const { id, level } = useParams();

  async function getCards() {
    try {
      const res = await axios.get(
        `https://655cb68925b76d9884fdd449.mockapi.io/cards?id=${id}&level=${level}`
      );
      dispatch(setCards(res.data));
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getCards();
  }, []);

  const { cards } = useSelector((state) => state.cards);
  const navigate = useNavigate();

  function nextCard(e) {
    // console.log(e.target.textContent === String(filterCards[count].answer));
    // console.log(e.target.textContent);
    const id = cards[index].id;
    const point = cards[index].point;
    // if (filterCards.length > index - 1) {

    // } else {
    //   alert('GAME OVER');
    //   // navigate('/');
    // }

    if (e.target.textContent == String(cards[index].answer)) {
      dispatch(changeStatus({ id }));
      dispatch(addPoints(point));
      setPoints((prev) => prev + point);
      setIndex((prev) => prev + 1);
      setCorrect((prev) => prev + 1);
    } else {
      dispatch(spendPoints(point / 2));
      setIndex((prev) => prev + 1);
      setPoints((prev) => prev - point / 2);
      setInCorrect((prev) => prev + 1);
    }
  }
  console.log(points);

  // console.log('filterCards.length', filterCards.length);
  // console.log('filterCards[index]', filterCards[index]);
  // console.log('filterCards.length > index', filterCards.length > index);

  function endGame() {
    alert(`GAME OVER.Верно:${correct} Вы заработали ${points} очков!`);
    navigate('/');
  }
  return (
    <div className="answer">
      <div>
        Верно:{correct} Неверно:{incorrect}
      </div>
      <br />
      <br />
      {cards.length > index ? (
        <CardItem nextCard={nextCard} card={cards[index]} />
      ) : (
        endGame()
      )}
    </div>
  );
}

export default CategoryCards;
