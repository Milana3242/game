import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isAvaible } from '../redux/slices/categorySlice';
import { spendPoints } from '../redux/slices/pointsSlice';

function CategoryItem({ id, title, level, avaible, cost }) {
  const dispatch = useDispatch();
  const { points } = useSelector((state) => state.points);
  console.log(points - cost > 0);
  function openCategory() {
    if (points - cost >= 0) {
      dispatch(isAvaible({ cost, points, id }));
      dispatch(spendPoints(cost));
    } else {
      alert('НЕТ ДЕНЯК БОМЖ');
    }
  }

  return (
    <div className="category">
      {avaible === true ? (
        <Link to={`/Level/${id}`} class="card">
          <div>{title}</div>
        </Link>
      ) : (
        <div onClick={openCategory}>{title}</div>
      )}
    </div>
  );
}

export default CategoryItem;
