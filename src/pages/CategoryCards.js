import React from 'react';
import { changeStatus, setCards } from '../redux/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addPoints,
  oneGamePoints,
  spendPoints,
} from '../redux/slices/pointsSlice';
import CardItem from '../components/CardItem';

function CategoryCards(props) {
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState(0);
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
  const filterCards = cards.filter(
    (card) => card.id == id && card.level == level
  );
  console.log(filterCards);
  function nextCard(e) {
    // console.log(e.target.textContent === String(filterCards[count].answer));
    // console.log(e.target.textContent);
    const id = filterCards[index].id;
    const point = filterCards[index].point;
    // if (filterCards.length > index - 1) {

    // } else {
    //   alert('GAME OVER');
    //   // navigate('/');
    // }

    if (e.target.textContent == String(filterCards[index].answer)) {
      dispatch(changeStatus({ id }));
      dispatch(addPoints(point));
      setPoints((prev) => prev + point);
      setIndex((prev) => prev + 1);
    } else {
      dispatch(spendPoints(point / 2));
      setIndex((prev) => prev + 1);
      setPoints((prev) => prev - point / 2);
    }
  }
  console.log(points);

  // console.log('filterCards.length', filterCards.length);
  // console.log('filterCards[index]', filterCards[index]);
  // console.log('filterCards.length > index', filterCards.length > index);

  function endGame() {
    alert(`GAME OVER.Вы заработали ${points} очков!`);
    navigate('/');
  }
  return (
    <div className="answer">
      {filterCards.length > index ? (
        <CardItem nextCard={nextCard} card={filterCards[index]} />
      ) : (
        endGame()
      )}
    </div>
  );
}

export default CategoryCards;
