import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { spendPoints } from "../redux/slices/pointsSlice";
import { addOpenCategory } from "../redux/slices/userSlice";

function CategoryItem({ id, title, avaible, cost }) {
  const dispatch = useDispatch();
  const { points } = useSelector((state) => state.points);

  function openCategory() {
    if (points - cost >= 0) {
      dispatch(addOpenCategory({ id, levelId: "1" }));
      dispatch(spendPoints(cost));
    } else {
      alert("НЕТ ДЕНЯК БОМЖ");
    }
  }

  return (
    <>
      {avaible === true ? (
        <Link to={`/сategoryCards/${id}`} class="card">
          <div className="category">{title}</div>
        </Link>
      ) : (
        <div className="category" onClick={openCategory}>
          {title}
        </div>
      )}
    </>
  );
}

export default CategoryItem;
