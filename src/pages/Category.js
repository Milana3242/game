import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCategory } from "../redux/slices/categorySlice";
import CategoryItem from "../components/CategoryItem";
import { manyPoints } from "../redux/slices/pointsSlice";

function Category(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { openCategories } = useSelector((state) => state.user);


  async function getCategory() {
    try {
      const res = await axios.get(
        `https://6686a7ef83c983911b03234c.mockapi.io/categories/`
      );
      dispatch(setCategory(res.data));
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  //   async function updateCategory(id, avaible) {
  //     try {
  //       const res = await axios.put(
  //         `https://6686a7ef83c983911b03234c.mockapi.io/categories/${id}`,
  //         {
  //           avaible: true,
  //         }
  //       );
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     window.scrollTo(0, 0);
  //   }

  React.useEffect(() => {
    getCategory();
    dispatch(manyPoints());
  }, []);

  function checkAvaible(categoryId) {
    return Boolean(openCategories.find((item) => item.categoryId === categoryId));
  }

  return (
    <div className="categories">
      {categories.map((categ, i) => {
        return (
          <CategoryItem
            key={i}
            id={categ.id}
            title={categ.title}
            level={categ.level}
            avaible={checkAvaible(categ.id)}
            cost={categ.cost}
          />
        );
      })}
    </div>
  );
}

export default Category;
