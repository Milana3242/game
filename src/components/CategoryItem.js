import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAvaible } from "../redux/slices/categorySlice";
import { spendPoints } from "../redux/slices/pointsSlice";
import { addOpenCategory } from "../redux/slices/userSlice";

function CategoryItem({ id, title, level, avaible, cost, updateCategory }) {
  const { openCategories } = useSelector((state) => state.user);

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

  console.log(avaible);

  return (
    < >
      {avaible === true ? (
        <Link to={`/Level/${id}`} class="card">
          <div className="category">{title}</div>
        </Link>
      ) : (
        <div className="category" onClick={openCategory}>{title}</div>
      )}
    </>
  );
}

export default CategoryItem;
