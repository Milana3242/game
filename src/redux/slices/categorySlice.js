import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
    },
    // setAvaible(state, action) {
    //   const findCategory = state.categories.find(
    //     (item) => item.id == action.payload.id
    //   );
    //   findCategory.avaible = true;
    // },
    // setLevel(state, action) {
    //   const findCategory = state.categories.find(
    //     (item) => item.id == action.payload.id
    //   );
    //   findCategory.level[action.payload.i].status = 1;
    // },
  },
});

export const { setCategory, setAvaible, setLevel } = categorySlice.actions;
export default categorySlice.reducer;
