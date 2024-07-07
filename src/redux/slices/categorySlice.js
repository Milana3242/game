import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
    },
    isAvaible(state, action) {
      const findCategory = state.categories.find(
        (item) => item.id == action.payload.id
      );
      findCategory.avaible = true;
    },
    isLevel(state, action) {
      const findCategory = state.categories.find(
        (item) => item.id == action.payload.id
      );
      console.log(findCategory[action.payload.i]);
      findCategory.level[action.payload.i].status = 1;
    },
  },
});

export const { setCategory, isAvaible, isLevel } = categorySlice.actions;
export default categorySlice.reducer;
