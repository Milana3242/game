import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Milana",
  points: 300,
  openCategories: [{ categoryId: "1", level: 1 }],
};

const pointsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addOpenCategory(state, action) {
      const categId = action.payload.id;
      state.openCategories.push({ categoryId: categId, level: 1 });
    },
    changeLevel(state, action) {
      const category = state.openCategories.find(
        (item) => item.categoryId === action.payload.id
      );
      category.level = action.payload.i;
    },
  },
});

export const { addOpenCategory, changeLevel } = pointsSlice.actions;
export default pointsSlice.reducer;
