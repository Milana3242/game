import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Header(props) {
  const { points } = useSelector((state) => state.points);
  const navigate = useNavigate();
  console.log(points);

  return (
    <div className="Header">
      <button onClick={() => navigate(-1)}>Назад</button>
      <p>ВАШИ ОЧКИ:{points}</p>
    </div>
  );
}

export default Header;
