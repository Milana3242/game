import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { addPoints, spendPoints } from "../redux/slices/pointsSlice";
import CardItem from "../components/CardItem";
import { setCards } from "../redux/slices/cardSlice";

function CategoryCards(props) {
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setInCorrect] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [answer, setAnswer] = React.useState();

  const dispatch = useDispatch();

  const { id } = useParams();

  async function getCards() {
    try {
      const res = await axios.get(
        `https://655cb68925b76d9884fdd449.mockapi.io/cards?id=${id}`
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

  //   function nextCard(e) {
  // console.log(e.target.textContent === String(filterCards[count].answer));
  // console.log(e.target.textContent);
  // const id = cards[index].id;
  // const point = cards[index].point;
  // if (filterCards.length > index - 1) {

  // } else {
  //   alert('GAME OVER');
  //   // navigate('/');
  // }

  //     if (e.target.textContent == String(cards[index].answer)) {
  //       dispatch(changeStatus({ id }));
  //       dispatch(addPoints(point));
  //       setPoints((prev) => prev + point);
  //       setIndex((prev) => prev + 1);
  //       setCorrect((prev) => prev + 1);
  //     } else {
  //       dispatch(spendPoints(point / 2));
  //       setIndex((prev) => prev + 1);
  //       setPoints((prev) => prev - point / 2);
  //       setInCorrect((prev) => prev + 1);
  //     }
  //   }
  //   }

  // console.log('filterCards.length', filterCards.length);
  // console.log('filterCards[index]', filterCards[index]);
  // console.log('filterCards.length > index', filterCards.length > index);

  function endGame() {
    alert(
      `GAME OVER.Верно:${correct} Вы ${
        points > 0 ? `заработали ${points}` : `потратили ${points * -1}`
      } очков!`
    );
    navigate("/");
  }

  function callBack(card, value, answer) {
    console.log("card", card, value);
    if (value === card.answer) {
      dispatch(addPoints(card.point));
      setPoints((prev) => prev + card.point);
      setIndex((prev) => prev + 1);
      setCorrect((prev) => prev + 1);
      setAnswer("ВЕРНО.");
    } else {
      dispatch(spendPoints(card.point / 2));
      setIndex((prev) => prev + 1);
      setPoints((prev) => prev - card.point / 2);
      setInCorrect((prev) => prev + 1);
      setAnswer("ЛОЖЬ.");
    }
  }

  console.log(answer);

  function shuffle(array) {
    const arr = array.slice(0);
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }

  const mixCards = useMemo(() => shuffle(cards), [cards]);

  return (
    <div className="answer">
      <div>
        Верно:{correct} Неверно:{incorrect}
      </div>
      <div>
        {answer} {description}
      </div>
      <br />
      <br />
      {cards.length * 2 > index ? (
        <>
          {cards
            .map((card) => {
              return (
                <>
                  <CardItem
                    setDescription={setDescription}
                    callBack={callBack}
                    card={card}
                    setAnswer={setAnswer}
                  />
                </>
              );
            })
            .reverse()}
        </>
      ) : (
        endGame()
      )}
    </div>
  );
}

export default CategoryCards;
