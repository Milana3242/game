import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setLevel } from "../redux/slices/categorySlice";
import { spendPoints } from "../redux/slices/pointsSlice";
import axios from "axios";

function Level(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const level = [1, 2, 3];
  const { categories } = useSelector((state) => state.categories);
  const { points } = useSelector((state) => state.points);
  const findCateg = categories.find((categ) => categ.id == id);

  async function updateCategory(findCateg, i) {
    let level = findCateg.level.map((item,index) => i===index?{...item,status:1}:item);
    console.log(level, i);

    try {
      const res = await axios.put(
        `https://6686a7ef83c983911b03234c.mockapi.io/categories/${findCateg.id}`,
        {
          level: level,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  function openLevel(i) {
    if (points - findCateg.cost >= 0) {
      dispatch(setLevel({ id, i }));
      dispatch(spendPoints(findCateg.cost, points));
      updateCategory(findCateg, i);
    } else {
      alert("НЕТ ДЕНЯК БОМЖ");
    }
  }
  return (
    <div className="level_icon">
      {level.map((item, i) => {
        console.log("sa", findCateg.level[i].status);

        return findCateg.level[i].status === 0 ? (
          <svg
            onClick={() => openLevel(i)}
            width="80px"
            height="80px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
              fill="#1C274C"
            />
          </svg>
        ) : (
          <Link to={`/CategoryCards/${id}/${item}`}>
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C4.13525 10.1379 3.40931 10.348 2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.2426 10 18.8284 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
                fill="#1C274C"
              />
            </svg>
          </Link>
        );
      })}
    </div>
  );
}

export default Level;
