import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, } from "react-router-dom";

function Header(props) {
  const { points } = useSelector((state) => state.points);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Header">
      {location.pathname!=='/' ? (
        <button onClick={() => navigate(-1)}>Назад</button>
      ) : (
        ""
      )}
      <p>ВАШИ ОЧКИ:{points}</p>
    </div>
  );
}

export default Header;
