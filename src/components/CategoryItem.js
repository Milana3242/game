import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isAvaible } from "../redux/slices/categorySlice";

function CategoryItem({ id, title, level, avaible, cost }) {
    const dispatch=useDispatch()
    const {points} = useSelector((state) => state.points);
    function openCategory(){
        alert('sws')
        dispatch(isAvaible(cost,points,id))
    }
  return (
    <div className="category">

      {avaible === true ? (
        <Link to={`/Level/${id}`} onClick={openCategory} class="card">
          <p>{title}</p>
        </Link>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
}

export default CategoryItem;
