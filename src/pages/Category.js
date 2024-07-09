import React from 'react';
import { setCategory } from '../redux/slices/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import CategoryItem from '../components/CategoryItem';
import { manyPoints } from '../redux/slices/pointsSlice';

function Category(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
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

  async function updateCategory(id,avaible) {
    try {
      const res = await axios.put(
        `https://6686a7ef83c983911b03234c.mockapi.io/categories/${id}`,
        {
            avaible: true,

          }
      );
      console.log(res)
    } catch (err) {
      console.log(err);
    }
    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    getCategory();
dispatch(manyPoints())
  }, []);

  return (
    <div className="categories">
      {categories.map((categ) => {
        return (
          <CategoryItem
            id={categ.id}
            title={categ.title}
            level={categ.level}
            avaible={categ.avaible}
            cost={categ.cost}
            updateCategory={updateCategory}
          />
        );
      })}
    </div>
  );
}

export default Category;
